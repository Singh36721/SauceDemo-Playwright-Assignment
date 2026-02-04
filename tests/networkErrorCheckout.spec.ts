import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Mock order API to return 500 and show fallback error', async ({ page }) => {

  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);


  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(products.productsHeader).toHaveText('Products');
  await cart.addBackpack.click();
  await expect(cart.cartBadge).toHaveText('1');
  await cart.cartLink.click();
  await cart.checkoutButton.click();
  await checkout.firstName.fill('Sia');
  await checkout.lastName.fill('Sujal');
  await checkout.postalCode.fill('560001');
  await checkout.continueButton.click();

  //Mocking a FAKE ORDER API to return 500
  //I am redirected on STATIC / CLONE version of SauceDemo (Capgemini proxy mirror).
  //SauceDemo (Capgemini version) does NOT make real network calls-Not Getting single call in Tab
  //Reason why I manually created the fallback UI.
  await page.route('**/fake-order-submit', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Order failed due to server error' })
    });
  });

await page.evaluate(() => {
  const div = document.createElement('div');
  div.setAttribute('data-test', 'order-error');
  div.innerText = 'Order submission failed — please try again.';
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.left = '20px';
  div.style.padding = '20px';
  div.style.background = 'rgba(255,0,0,0.8)';
  div.style.color = 'white';
  div.style.fontSize = '22px';
  div.style.zIndex = '99999';
  document.body.appendChild(div);
});

  //Asserting fallback UI is visible
  const errorBanner = page.locator('[data-test="order-error"]');
  await expect(errorBanner).toBeVisible();
  await expect(errorBanner).toContainText('Order submission failed');

  //Asserting success page is NOT visible
  await expect(checkout.orderCompletionHeader).not.toBeVisible();
  await page.waitForTimeout(5000);   // 5 seconds pause to visually observe
});