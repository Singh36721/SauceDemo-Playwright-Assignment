import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Checkout Flow Happy Path', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(products.productsHeader).toHaveText('Products');
  await cart.addBackpack.click();
  await expect(cart.cartBadge).toHaveText('1');

  //Clicking on Cart
  await cart.cartLink.click();

  //Proceeding for checkout
  await cart.checkoutButton.click();

  //Filling the user information
  await checkout.firstName.fill('Sia');
  await checkout.lastName.fill('Sujal');
  await checkout.postalCode.fill('560001');
  await checkout.continueButton.click();

  //Click Finish on overview page
  await checkout.finishButton.click();

  //Assert order completion
  await expect(checkout.orderCompletionHeader).toHaveText('Thank you for your order!');
  await expect(checkout.dispatchedText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});