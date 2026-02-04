import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Failed with invalid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  // Step 1: Go to login page
  await login.goto();

  // Step 2: Attempt login with invalid username & password
  await login.login('standard_user', 'secret_sauce_wrongPass');

  // Wait for error message to appear
  await expect(login.errorMessage).toBeVisible({ timeout: 10000 });

  // OPTIONAL: Validate correct message format

  await expect(login.errorMessage).toBeVisible();
});