import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page-parabank";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";

test('Answers 07', async ({ page }) => {

  // TODO: add a new mock response to the page. This should mock the call to
  //  */**/customers/12212/accounts and return a list with a single account with #99999.
  //  The mock response body looks like this:
  //  [{"id":99999,"customerId":12212,"type":"CHECKING","balance":9999.99}]
  //  Define this mock _before_ calling the code to login you find below.
  await page.route('*/**/customers/12212/accounts', async route => {
    const json = [{id: 99999, customerId: 12212, type: 'CHECKING', balance: 9999.99}];
    await route.fulfill({json});
  });

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('john', 'demo');

  // TODO: write an assertion that checks that after logging in, the page shows a link to the account details
  //  for account with number 99999 (i.e., a link with its text equal to '99999').
  await expect(page.getByRole('link', {name: '99999'})).toBeVisible();

  // TODO: EXTRA:
  //  Add two more mock responses:
  //  - one that returns the account details when the user clicks the link to go to the account
  //  - one that returns a transaction for that account so that shows up in the account details page
  //  Find out what the responses should look like for yourself by inspecting traffic in the live application
  await page.route('*/**/accounts/99999', async route => {
    const json = [{id: 99999, customerId: 12212, type: 'CHECKING', balance: 9999.99}];
    await route.fulfill({json});
  });

  await page.route('*/**/accounts/99999/transactions', async route => {
    const json = [{id: 45454, accountId: 99999, type: 'Credit', date: 1670774400000, amount: 300.00, description: 'Check # 1234'}];
    await route.fulfill({json});
  });

  // TODO: EXTRA:
  //  create a new instance of the AccountsOverviewPage and use the selectAccount() method
  //  to navigate to the account details for account 99999
  const accountsOverviewPage = new AccountsOverviewPage(page);
  await accountsOverviewPage.selectAccount('99999');

  // TODO: EXTRA:
  //  Assert that a button with text 'Go' becomes visible.
  //  Spoiler: it should, but it doesn't. Can you find out why?
  //  Hint: Have a look at the traffic in the real application to see if we missed something..
  await expect(page.getByRole('button', {name: 'Go'})).toBeVisible();
});
