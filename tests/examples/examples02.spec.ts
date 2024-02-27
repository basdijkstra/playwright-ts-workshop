import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";

test('Examples 02', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('john', 'demo');

  const accountsOverviewPage = new AccountsOverviewPage(page);
  await accountsOverviewPage.selectAccount('12345');

  await expect(page).toHaveTitle('ParaBank | Account Activity');

});
