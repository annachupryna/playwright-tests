import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class GaragePage extends BasePage {
    readonly addCarButton: Locator;

    constructor(page: Page) {
        super(page);

        this.addCarButton = page.getByRole("button", { name: "Add car" });
    }

}
