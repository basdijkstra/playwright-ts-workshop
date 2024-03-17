import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";

const authFile = 'playwright/.auth/parabank.json';

test.describe('Examples 05', () => {

  test.beforeAll('Login and capture browser state', async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAs('john', 'demo');

    await expect(page.getByRole('link', {name: '12345'})).toBeVisible();

    await page.context().storageState({ path: authFile });
  });

  test('Reuse browser state', async ({ browser}) => {

    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();

    const accountsOverviewPage = new AccountsOverviewPage(page);
    await accountsOverviewPage.open();

    // After you completed the exercises, this assertion (and therefore the test) should pass
    await expect(page.getByRole('link', {name: '12345'})).toBeVisible();
  });
});