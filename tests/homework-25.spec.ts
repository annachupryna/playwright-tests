import { test, expect } from '@playwright/test';
import { MainLandingPage } from '../src/pages/mainLandingPage';
import { users } from '../src/data/users';
import { GaragePage } from '../src/pages/garagePage';

test.describe('Login tests', () => {
    test('should login with valid user', async ({ page }) => {
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
});