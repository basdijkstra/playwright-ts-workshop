import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { AccountsOverviewPage } from './pages/accountsOverviewPage'; 

const authFile = 'playwright/.auth/parabank.json';

test.describe('Answers 04', () => {

  test.beforeAll('Login and capture browser state', async({ browser }) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    // TODO: Use the LoginPage object to log in to the application
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAs('john', 'demo');

    // TODO: wait until the element with id 'accountTable' is visible
    //   (this guarantees the login sequence is completed)
    await expect(page.locator('#accountTable')).toBeVisible();

    // TODO: store the current browser state in the file location stored in the `authFile` variable
    await page.context().storageState({ path: authFile });
  });

  test('Reuse browser state to directly navigate to Accounts Overview page', async ({ browser }) => {

    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();

    const accountsOverviewPage = new AccountsOverviewPage(page);
    await accountsOverviewPage.open();

    // After you completed the exercises, this assertion (and therefore the test) should pass
    await expect(page.locator('#accountTable')).toBeVisible();
  });
});
