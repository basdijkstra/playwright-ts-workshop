import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly textfieldUsername: Locator;
    readonly textfieldPassword: Locator;
    readonly buttonDoLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textfieldUsername = page.getByPlaceholder('Username');
        this.textfieldPassword = page.getByPlaceholder('Password');
        this.buttonDoLogin = page.getByRole('button', { name: 'Login' });
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginAs(username: string, password: string) {
        await this.textfieldUsername.fill(username);
        await this.textfieldPassword.fill(password);
        await this.buttonDoLogin.click();
    }
}