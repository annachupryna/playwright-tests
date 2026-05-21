import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    //baseURL: 'https://qauto.forstudy.space/',
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.USER_NAME!,
      password: process.env.USER_PASSWORD!

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
