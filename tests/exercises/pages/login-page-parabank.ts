import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly textfieldUsername: Locator;
    readonly textfieldPassword: Locator;
    readonly buttonDoLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textfieldUsername = page.locator('xpath=//input[@name=\'username\']');
        this.textfieldPassword = page.locator('xpath=//input[@name=\'password\']');
        this.buttonDoLogin = page.getByRole('button', { name: 'Log In' });
    }

    async open() {
        await this.page.goto('https://parabank.parasoft.com');
    }

    async loginAs(username: string, password: string) {
        await this.textfieldUsername.fill(username);
        await this.textfieldPassword.fill(password);
        await this.buttonDoLogin.click();
    }
}