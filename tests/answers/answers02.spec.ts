import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/loginPage";
import { AccountsOverviewPage } from "./pages/accountsOverviewPage";
import { RequestLoanPage } from './pages/requestLoanPage';

test('Answers 02 - Log in to ParaBank using Page Objects', async ({ page }) => {

  // Create a new LoginPage instance (the class and methods already exist)
  //   then first call open() on it, then loginAs(),
  //   passing username 'john' and password 'demo' as arguments
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('john', 'demo');

  // Create a new AccountsOverviewPage instance (the class already exists). Then,
  //   in the page object class, create a method to select a menu item with by its text
  //   and then call it here, passing in 'Request Loan' as an argument
  const accountsOverviewPage = new AccountsOverviewPage(page);
  await accountsOverviewPage.selectMenuItem('Request Loan');

  // After you completed the exercises, this assertion (and therefore the test) should pass
  await expect(new RequestLoanPage(page).textfieldAmount).toBeVisible();

});
