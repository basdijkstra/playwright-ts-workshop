import { expect, type Locator, type Page } from '@playwright/test';

export class AccountsOverviewPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectAccount(accountNumber: string) {
        await this.page.getByRole('link', { name: accountNumber }).click();
    }
}