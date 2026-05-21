import { test, expect } from "@playwright/test";
import { randomLetters } from "../helpers/utils";

test("TC1 - Positive register", async ({ page }) => {
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");

    const singUpButton = page.getByRole("button", { name: "Sign up" });
    const nameInput = page.locator('input[id="signupName"]');
    const lastNameInput = page.locator('input[id="signupLastName"]');
    const emailInput = page.locator('input[id="signupEmail"]');
    const passwordInput = page.locator('input[id="signupPassword"]');
    const repeatPasswordInput = page.locator('input[id="signupRepeatPassword"]');
    const registerButon = page.getByRole("button", { name: "Register" });

    const addCarButton = page.getByRole("button", { name: "Add Car" });

    await singUpButton.click();
    await nameInput.fill(randomLetters(9));
    await lastNameInput.fill(randomLetters(9));
    await emailInput.fill(`${randomLetters(5)}@mail.com`);
    await passwordInput.fill("Password123!");
    await repeatPasswordInput.fill("Password123!");
    await registerButon.click();
    await expect(addCarButton).toBeVisible();

});

test("TC2 - Negative: name field is empty", async ({ page }) => {
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");

    const singUpButton = page.getByRole("button", { name: "Sign up" });
    const nameInput = page.locator('input[id="signupName"]');
    const lastNameInput = page.locator('input[id="signupLastName"]');
    const nameFieldError = page.getByText("Name required");

    await singUpButton.click();
    await nameInput.click();
    await lastNameInput.click();
    await expect(nameFieldError).toBeVisible();

});

test("TC3 - Negative: name field is too short", async ({ page }) => {
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");

    const singUpButton = page.getByRole("button", { name: "Sign up" });
    const nameInput = page.locator('input[id="signupName"]');
    const lastNameInput = page.locator('input[id="signupLastName"]');
    const nameFieldError = page.getByText("Name has to be from 2 to 20 characters long");

    await singUpButton.click();
    await nameInput.fill('a');
    await lastNameInput.click();
    await expect(nameFieldError).toBeVisible();
});

test("TC4 - Negative: name field is too long", async ({ page }) => {
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");

    const singUpButton = page.getByRole("button", { name: "Sign up" });
    const nameInput = page.locator('input[id="signupName"]');
    const lastNameInput = page.locator('input[id="signupLastName"]');
    const nameFieldError = page.getByText("Name has to be from 2 to 20 characters long");

    await singUpButton.click();
    await nameInput.fill('aaaaaaaaaaaaaaaaaaaaaa');
    await lastNameInput.click();
    await expect(nameFieldError).toBeVisible();
});

test("TC5 - Negative: name field is invalid", async ({ page }) => {
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");

    const singUpButton = page.getByRole("button", { name: "Sign up" });
    const nameInput = page.locator('input[id="signupName"]');
    const lastNameInput = page.locator('input[id="signupLastName"]');
    const nameFieldError = page.getByText("Name is invalid");

    await singUpButton.click();
    await nameInput.fill('заващ');
    await lastNameInput.click();
    await expect(nameFieldError).toBeVisible();
});
