import { test, expect } from '@playwright/test';
import { MainLandingPage } from '../src/pages/mainLandingPage';
import { users } from '../src/data/users';
import { GaragePage } from '../src/pages/garagePage';

test.describe('Login tests', () => {
    test('TC1 - Positive register', async ({ page }) => {
        const mainLandingPage = new MainLandingPage(page);
        const garagePage = new GaragePage(page);

        await mainLandingPage.openMainLandingPage();
        await mainLandingPage.expectOpened();
        await mainLandingPage.clickSignUpButton();

        await mainLandingPage.registerForm.registerUserE2E(
            users.newUser.name,
            users.newUser.lastName,
            users.newUser.email,
            users.newUser.password,
        );

        await expect(garagePage.addCarButton).toBeVisible();

    })

    test('TC2 - Negative: name field is empty', async ({ page }) => {
        const mainLandingPage = new MainLandingPage(page);

        await mainLandingPage.openMainLandingPage();
        await mainLandingPage.expectOpened();
        await mainLandingPage.clickSignUpButton();

        await mainLandingPage.registerForm.nameInput.click();
        await mainLandingPage.registerForm.lastNameInput.click();

        await expect(mainLandingPage.registerForm.nameRequiredError).toBeVisible();

    })

    test('TC3 - Negative: name field is too short', async ({ page }) => {
        const mainLandingPage = new MainLandingPage(page);

        await mainLandingPage.openMainLandingPage();
        await mainLandingPage.expectOpened();
        await mainLandingPage.clickSignUpButton();

        await mainLandingPage.registerForm.fillNameInput('a');
        await mainLandingPage.registerForm.lastNameInput.click();

        await expect(mainLandingPage.registerForm.nameInvalidLengthError).toBeVisible();
    })

    test('TC4 - Negative: name field is too long', async ({ page }) => {
        const mainLandingPage = new MainLandingPage(page);

        await mainLandingPage.openMainLandingPage();
        await mainLandingPage.expectOpened();
        await mainLandingPage.clickSignUpButton();

        await mainLandingPage.registerForm.fillNameInput('aaaaaaaaaaaaaaaaaaaaaa');
        await mainLandingPage.registerForm.lastNameInput.click();

        await expect(mainLandingPage.registerForm.nameInvalidLengthError).toBeVisible();
    })

    test('TC5 - Negative: name field is invalid', async ({ page }) => {
        const mainLandingPage = new MainLandingPage(page);

        await mainLandingPage.openMainLandingPage();
        await mainLandingPage.expectOpened();
        await mainLandingPage.clickSignUpButton();

        await mainLandingPage.registerForm.fillNameInput('рппвв');
        await mainLandingPage.registerForm.lastNameInput.click();

        await expect(mainLandingPage.registerForm.nameInvaledCharactersError).toBeVisible();
    })

    test('TC6 - Open url from env variable', async ({ page }) => {
        const mainLandingPage = new MainLandingPage(page);
        await page.goto('/');
        await mainLandingPage.expectOpened();
    })
})
