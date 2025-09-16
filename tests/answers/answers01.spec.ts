import { test, expect } from '@playwright/test';

test('Answers 01', async ({ page }) => {

  // Navigate to https://www.saucedemo.com
  await page.goto('https://www.saucedemo.com');

  // Login by:
  // Typing 'standard_user' into the text field with placeholder 'Username'. Use the getByPlaceholder() locator.
  // Typing 'secret_sauce' into the text field with placeholder 'Password'.
  // Clicking the button with name 'Login'. See the example for an idea on how to do this.
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login'}).click();

  // Check that the element with text 'Products' is visible
  // See https://playwright.dev/docs/locators#locate-by-text for a hint.
  await expect(page.getByText('Products')).toBeVisible();

});
