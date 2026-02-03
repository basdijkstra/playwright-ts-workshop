import { test, expect } from '@playwright/test';
import {LoginPage} from "./pages/loginPage";
import { ProductsOverviewPage } from './pages/productsOverviewPage';

test('Examples 02', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  expect(new ProductsOverviewPage(page).title).toBeVisible();

});
