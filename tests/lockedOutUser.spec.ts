import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Locked Out User should show locked out error and stay on login page', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');

  //Asserting the EXACT error message
  await expect(login.loggedOutErrorMessage).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );

  //Asserting the user remains on login page
  await expect(page).toHaveURL(/\/$/);
});