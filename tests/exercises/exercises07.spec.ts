import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page-parabank";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";

test('Exercises 07', async ({ page }) => {

  // TODO: add a new mock response to the page. This should mock the call to
  //  */**/customers/12212/accounts and return a list with a single account with #99999.
  //  The mock response body looks like this:
  //  [{"id":99999,"customerId":12212,"type":"CHECKING","balance":9999.99}]
  //  Define this mock _before_ calling the code to login you find below.


  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('john', 'demo');

  // TODO: write an assertion that checks that after logging in, the page shows a link to the account details
  //  for account with number 99999 (i.e., a link with its text equal to '99999').


  // TODO: EXTRA:
  //  Add two more mock responses:
  //  - one that returns the account details when the user clicks the link to go to the account
  //  - one that returns a transaction for that account so that shows up in the account details page
  //  Find out what the responses should look like for yourself by inspecting traffic in the live application


  // TODO: EXTRA:
  //  create a new instance of the AccountsOverviewPage and use the selectAccount() method
  //  to navigate to the account details for account 99999


  // TODO: EXTRA:
  //  Assert that a button with text 'Go' becomes visible.
  //  Spoiler: it should, but it doesn't. Can you find out why?
  //  Hint: Have a look at the traffic in the real application to see if we missed something..

});
