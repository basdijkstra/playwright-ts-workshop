import { Page } from '@playwright/test';

export class ProductsOverviewPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get title() {
        return this.page.locator('[data-test=title]');
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
    
    async selectProduct(product: string) {
        await this.page.getByText(product).click();
    }
}