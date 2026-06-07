import { test, expect } from '@playwright/test';

test.describe('Create car via API', () => {
    test.beforeEach(async ({ request }) => {
        const loginResponse = await request.post('/api/auth/signin', {
            data: {
                email: process.env.USER_EMAIL,
                password: process.env.USER_PASSWORD,
                remember: false,
            },
        });

        expect(loginResponse.status()).toBe(200);
    });

    test('Create a new car', async ({ request }) => {
        const response = await request.post('/api/cars', {
            data: {
                carBrandId: 1,
                carModelId: 1,
                mileage: 100,
            },
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        console.log(body);
        expect(body.status).toBe('ok');
        expect(body.data).toHaveProperty('id');
        expect(body.data.mileage).toBe(100);
    });

    test('Negative: new car not created with missing data', async ({ request }) => {
        const response = await request.post('/api/cars', {
            data: {
                carBrandId: 1,
                carModelId: 1
            },
        });

        expect(response.status()).toBe(400);
        const body = await response.json();
        console.log(body);
        expect(body.status).toBe('error');
        expect(body.message).toBe('Mileage is required');
    });

    test('Negative: new car not created with invalid data', async ({ request }) => {
        const response = await request.post('/api/cars', {
            data: {
                carBrandId: 1,
                carModelId: 1,
                mileage: -100,
            },
        });

        expect(response.status()).toBe(400);
        const body = await response.json();
        console.log(body);
        expect(body.status).toBe('error');
        expect(body.message).toBe('Mileage has to be from 0 to 999999');
    });
});

