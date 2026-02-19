import { test, expect } from '@playwright/test';
import { LoginPage } from "../answers/pages/loginPage";
import { AxeBuilder } from '@axe-core/playwright';

test('Exercises 03 - Scan the ParaBank login page for accessibility violations', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();

  // TODO: scan the ParaBank login page for accessibility violations,
  //  print some info about the violations to the console using console.log()
  //  and then assert that there are 0 violations (there are more, so the test will fail).
  //  Additionally, inspect the violations that are reported and see
  //  if they make sense to you and think how you would report on them to your developers.


});
