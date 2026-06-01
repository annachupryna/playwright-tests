import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { RegisterFormComponent } from '../components/registerFormComponent';
import { routes } from '../constants/routes';

export class MainLandingPage extends BasePage {

    readonly singUpButton: Locator;
    readonly registerForm: RegisterFormComponent;

    constructor(page: Page) {
        super(page);
        this.registerForm = new RegisterFormComponent(page);

        this.singUpButton = page.getByRole("button", { name: "Sign up" });

    }

    public async clickSignUpButton() {
        await this.singUpButton.click();
        await expect(this.registerForm.nameInput).toBeVisible();
    }

    async openMainLandingPage() {
        await this.open(routes.mainLanding);
    }

    async expectOpened() {
        await expect(this.singUpButton).toBeVisible();
    }
}
