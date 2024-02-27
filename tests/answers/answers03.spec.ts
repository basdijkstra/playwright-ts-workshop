import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page";
import {ProductsOverviewPage} from "./pages/products-overview-page";
import AxeBuilder from '@axe-core/playwright';

test('Answers 03', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  const productsOverviewPage = new ProductsOverviewPage(page);
  await productsOverviewPage.selectProduct('Sauce Labs Backpack');

  // TODO: scan the product details page for accessibility violations,
  //  print some info about the violations to the console using console.log()
  //  and then assert that there are 0 violations (there are more, so the test will fail).
  //  Additionally, inspect the violations that are reported and see
  //  if they make sense to you and think how you would report on them to your developers.
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  for (let violation of accessibilityScanResults.violations) {
    console.log(`Violation: ${violation.id} - ${violation.description} - Impact: ${violation.impact}`);
  }

  expect(accessibilityScanResults.violations.length).toEqual(0);

});
