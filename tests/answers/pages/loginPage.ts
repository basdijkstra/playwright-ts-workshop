import { Page } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://parabank.parasoft.com');
    }

    async loginAs(username: string, password: string) {
        await this.page.locator('xpath=//input[@name=\'username\']').fill(username);
        await this.page.locator('xpath=//input[@name=\'password\']').fill(password);
        await this.page.getByRole('button', { name: 'Log In' }).click();
    }
}