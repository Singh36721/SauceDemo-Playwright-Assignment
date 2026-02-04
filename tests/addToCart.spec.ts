import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Add two items to cart and verify cart count = 2', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  // Login
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // Verify Products page loaded
  await expect(products.productsHeader).toHaveText('Products');

  // Add two different items
  await cart.addBackpack.click();
  await cart.addBikeLight.click();

  // Assert cart badge is "2"
  await expect(cart.cartBadge).toHaveText('2');

  // Navigate to cart
  await cart.cartLink.click();

  // Assert cart contains exactly 2 items
  expect(await cart.getCartCount()).toBe(2);
});