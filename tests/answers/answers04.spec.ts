import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page";
import {ProductsOverviewPage} from "./pages/products-overview-page";

const authFile = 'playwright/.auth/user.json';

test.describe('Answers 04', () => {

  test.beforeAll('Login and capture browser state', async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    // TODO: Use the LoginPage object to log in to the application
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAs('standard_user', 'secret_sauce');

    // TODO: wait until the element with text 'Sauce Labs Backpack' is visible
    //   (this guarantees the login sequence is completed)
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // TODO: store the current browser state in the `authFile`
    await page.context().storageState({ path: authFile });
  });

  test('Reuse browser state - 01', async ({ browser}) => {

    // TODO: start a new browser that uses the previously stored browser state
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();

    const productsOverviewPage = new ProductsOverviewPage(page);
    await productsOverviewPage.open();
    await productsOverviewPage.selectProduct('Sauce Labs Backpack');

    await expect(page.locator('xpath=//div[contains(@class,\'inventory_details_name\') and text()=\'Sauce Labs Backpack\']')).toBeVisible();
  });

  test('Reuse browser state - 02', async ({ browser }) => {

    // TODO: start a new browser that uses the previously stored browser state
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();

    const productsOverviewPage = new ProductsOverviewPage(page);
    await productsOverviewPage.open();
    await productsOverviewPage.selectProduct('Sauce Labs Bike Light');

    await expect(page.locator('xpath=//div[contains(@class,\'inventory_details_name\') and text()=\'Sauce Labs Bike Light\']')).toBeVisible();
  });
});
