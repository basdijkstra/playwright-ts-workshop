import { Page } from '@playwright/test';

export class AccountsOverviewPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm')
    }

    // Create a new method to select a menu item. It should take a single string argument
    //   that contains the text of the menu link to be selected, and it should click the link
    //   with that text.
    
}