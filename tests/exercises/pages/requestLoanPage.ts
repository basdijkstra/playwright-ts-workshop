import { Page } from "@playwright/test";

export class RequestLoanPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get textfieldAmount() {
        return this.page.locator('#amount');
    }
}