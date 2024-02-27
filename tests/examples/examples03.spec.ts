import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/login-page";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";
import AxeBuilder from "@axe-core/playwright";

test('Examples 03', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  for (let violation of accessibilityScanResults.violations) {
    console.log(`Violation: ${violation.id} - ${violation.description} - Impact: ${violation.impact}`);
  }

  expect(accessibilityScanResults.violations.length).toEqual(0);

});
