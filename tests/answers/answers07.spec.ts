import { test, expect } from '@playwright/test';
import { LoginPage } from "./pages/loginPage";

test('Answers 07 - Use mock data in an API response', async ({ page }) => {

  // TODO: add a new mock response to the page. This should mock the call to
  //  */**/customers/12212/accounts and return a list with a single account with #99999.
  //  The mock response body looks like this:
  //  [{"id":99999,"customerId":12212,"type":"CHECKING","balance":9999.99}]
  //  Define this mock _before_ calling the code to login you find below.
  await page.route('*/**/customers/12212/accounts', async route => {
    const json = [{id: 99999, customerId: 12212, type: 'CHECKING', balance: 9999.99}];
    await route.fulfill({json: json});
  });

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('john', 'demo');

  // TODO: write an assertion that checks that after logging in, the page shows a link to the account details
  //  for account with number 99999 (i.e., a link with its text equal to '99999').
  await expect(page.getByRole('link', {name: '99999'})).toBeVisible();

});

test('Answers 07 - Use an error response code in an API response', async ({ page }) => {

  // TODO: add a new mock response to the page. This should mock the call to
  //  */**/customers/12212/accounts and return an HTTP 500 status code.
  //  Define this mock _before_ calling the code to login you find below.
  await page.route('*/**/customers/12212/accounts', async route => {
    await route.fulfill({status: 500});
  });

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('john', 'demo');

  // TODO: write an assertion that checks that after logging in, the page shows a div element with id 'showError'
  //  (this is an element containing an error message in ParaBank, indicating that retrieving the list of accounts failed)
  await expect(page.locator('div#showError')).toBeVisible();

});
