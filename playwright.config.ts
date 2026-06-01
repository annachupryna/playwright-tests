import { defineConfig, devices } from '@playwright/test';
//import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  projects: [
    {
      name: 'setup',
      testMatch: '**/auth.setup.ts',
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json'
      }
    },
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://qauto.forstudy.space',
    httpCredentials: {
      username: process.env.HTTP_USERNAME!,
      password: process.env.HTTP_PASSWORD!

    },

    headless: false,

    viewport: {
      width: 1440,
      height: 900,
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },
});
