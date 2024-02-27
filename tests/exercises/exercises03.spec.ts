import { test, expect } from '@playwright/test';
import {LoginPage} from "../answers/pages/login-page";
import {ProductsOverviewPage} from "../answers/pages/products-overview-page";
import AxeBuilder from '@axe-core/playwright';

test('Exercises 03', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  const productsOverviewPage = new ProductsOverviewPage(page);
  await productsOverviewPage.selectProduct('Sauce Labs Backpack');

  // TODO: scan the product details page for accessibility violations,
  //  print some info about the violations and assert that there are 0 violations (there are more)
  //  Additionally, inspect the violations that are reported and see
  //  if they make sense to you and think how you would report on them to your developers.

});
