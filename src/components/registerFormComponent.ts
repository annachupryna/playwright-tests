import { expect, Locator, Page } from '@playwright/test';
import { BaseComponent } from './baseComponent';

export class RegisterFormComponent extends BaseComponent {
    readonly nameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly repeatPasswordInput: Locator;
    readonly registerButton: Locator;
    readonly nameRequiredError: Locator;
    readonly nameInvalidLengthError: Locator;
    readonly nameInvaledCharactersError: Locator;

    constructor(page: Page) {
        const root = page.locator('.modal-content');
        super(page, root);

        this.nameInput = this.root.locator('input[id="signupName"]');
        this.lastNameInput = this.root.locator('input[id="signupLastName"]');
        this.emailInput = this.root.locator('input[id="signupEmail"]');
        this.passwordInput = this.root.locator('input[id="signupPassword"]');
        this.repeatPasswordInput = this.root.locator('input[id="signupRepeatPassword"]');
        this.registerButton = this.root.getByRole("button", { name: "Register" });
        this.nameRequiredError = page.getByText("Name required");
        this.nameInvalidLengthError = page.getByText("Name has to be from 2 to 20 characters long");
        this.nameInvaledCharactersError = page.getByText("Name is invalid");
    }

    public async fillNameInput(name: string) {
        await this.nameInput.fill(name);
    }

    public async fillLastNameInput(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    public async fillEmailInput(email: string) {
        await this.emailInput.fill(email);
    }

    public async fillPasswordInput(password: string) {
        await this.passwordInput.fill(password);
    }

    public async fillRepeatPasswordInput(repeatPassword: string) {
        await this.repeatPasswordInput.fill(repeatPassword);
    }

    public async clickRegisterButton() {
        await this.registerButton.click();
    }

    public async registerUserE2E(name: string, lastName: string, email: string, password: string) {
        await this.fillNameInput(name);
        await this.fillLastNameInput(lastName);
        await this.fillEmailInput(email);
        await this.fillPasswordInput(password);
        await this.fillRepeatPasswordInput(password);
        await this.clickRegisterButton();
    }

}