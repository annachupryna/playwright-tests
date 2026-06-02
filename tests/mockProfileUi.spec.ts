import { test, expect } from '@playwright/test';

test('UI should display fake cadatars from mocked profile API', async ({ page }) => {
    await page.route('**/api/users/profile', async route => {
        console.log('Mocked request:', route.request().url());

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                status: 'ok',
                data:
                {
                    userId: 363333,
                    photoFilename: 'default-user.png',
                    name: 'Username',
                    lastName: 'Usersername',
                },
            }),
        });
    });

    await page.goto('/panel/profile');

    await expect(page.getByText('Username')).toBeVisible();
    await expect(page.getByText('Usersername')).toBeVisible();
});
