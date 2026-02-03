import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/loginPage";
import AxeBuilder from "@axe-core/playwright";
import { ProductsOverviewPage } from './pages/productsOverviewPage';

test('Examples 03', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  const productsOverviewPage = new ProductsOverviewPage(page);
  await productsOverviewPage.selectProduct('Sauce Labs Backpack');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  for (let violation of accessibilityScanResults.violations) {
    console.log(`Violation: ${violation.id} - ${violation.description} - Impact: ${violation.impact}`);
  }

  expect(accessibilityScanResults.violations.length).toEqual(0);

});
