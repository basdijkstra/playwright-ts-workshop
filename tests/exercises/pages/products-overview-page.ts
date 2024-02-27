import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsOverviewPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    // Create a new method to select a product. It should take a single string argument
    //  that contains the name of the product to be selected, and it should click the link
    //  for the supplied product name (hint: use the product name text to find the element).
    // TODO: your code goes here
}