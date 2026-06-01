import { test, expect } from './fixtures/qauto.fixture';

test('Open garage as authorized user', async ({ userGaragePage }) => {
    await expect(userGaragePage.getByRole('button', { name: 'Add car' })).toBeVisible();
});
