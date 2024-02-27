import { test, expect } from '@playwright/test';

test('Examples 01', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com');

  await page.locator('xpath=//input[@name=\'username\']').fill('john');
  await page.locator('xpath=//input[@name=\'password\']').fill('demo');
  await page.getByRole('button', {name: 'Log In'}).click();

  await expect(page).toHaveTitle('ParaBank | Accounts Overview');

});
