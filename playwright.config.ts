import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    baseURL: 'https://qauto.forstudy.space/',

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
