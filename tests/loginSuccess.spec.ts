import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Login Successful login with standard_user', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  // Navigate to login page
  await login.goto();

  // Login using valid credentials as per document
  await login.login('standard_user', 'secret_sauce');

  // Assert: Landed on Products page
await expect(products.productsHeader).toHaveText('Products');
});