import { test, expect } from '@playwright/test';

test('Examples 01 - Log in to Swag Labs', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByText('Products')).toBeVisible();

});
