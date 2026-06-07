import { test as base, expect, Page } from '@playwright/test';
import { GaragePage } from '../../src/pages/garagePage';


type QAutoFixtures = {
    garagePage: GaragePage;
};

export const test = base.extend<QAutoFixtures>({
    garagePage: async ({ page }, use) => {
        const garagePage = new GaragePage(page);
        await garagePage.open('/panel/garage');
        await use(garagePage);


        // await page.goto('/panel/garage');
        // await expect(page).toHaveURL(/panel\/garage/);


        // await use(page);
    },

});

export { expect };
