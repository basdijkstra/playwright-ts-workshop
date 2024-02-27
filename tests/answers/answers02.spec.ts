import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page";
import {ProductsOverviewPage} from "./pages/products-overview-page";

test('Answers 02', async ({ page }) => {

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
