import { test, expect } from './fixtures/qauto.fixture';

test('Open garage as authorized user', async ({ garagePage }) => {
    await expect(garagePage.addCarButton).toBeVisible();
});
