import { test, expect } from '@playwright/test';
import {LoginPage} from "../answers/pages/login-page";
import {ProductsOverviewPage} from "../answers/pages/products-overview-page";

const authFile = 'playwright/.auth/user.json';

test.describe('Answers 05', () => {

  test.beforeAll('Login and capture browser state', async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAs('standard_user', 'secret_sauce');

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await page.context().storageState({ path: authFile });
  });

  test('Reuse browser state', async ({ browser}) => {

    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();

    // Create a new ProductsOverviewPage instance (the class already exists). Then,
    //  in the page object class, create a method to select the product with the name 'Sauce Labs Backpack'
    //  and then call it here
    const productsOverviewPage = new ProductsOverviewPage(page);
    await productsOverviewPage.open();
    await productsOverviewPage.selectProduct('Sauce Labs Backpack');

    // After you completed the exercises, this assertion (and therefore the test) should pass
    await expect(page.locator('xpath=//div[contains(@class,\'inventory_details_name\') and text()=\'Sauce Labs Backpack\']')).toBeVisible();

  });

});



test('Answers 05', async ({ page }) => {

  // Create a new LoginPage instance (the class and methods already exist)
  //  then first call open() on it, then loginAs(), passing the credentials as arguments
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  // Create a new ProductsOverviewPage instance (the class already exists). Then,
  //  in the page object class, create a method to select the product with the name 'Sauce Labs Backpack'
  //  and then call it here
  const productsOverviewPage = new ProductsOverviewPage(page);
  await productsOverviewPage.selectProduct('Sauce Labs Backpack');

  // After you completed the exercises, this assertion (and therefore the test) should pass
  await expect(page.locator('xpath=//div[contains(@class,\'inventory_details_name\') and text()=\'Sauce Labs Backpack\']')).toBeVisible();

});
