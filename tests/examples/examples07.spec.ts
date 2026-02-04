import { test, expect } from '@playwright/test';

test('Examples 07', async ({ page }) => {

  await page.route('*/**/api/v1/fruits', async route => {
    const json = [{name: 'SomeRandomValue', id: 21}];
    await route.fulfill({json: json})
  });

  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('SomeRandomValue')).toBeVisible();
});
