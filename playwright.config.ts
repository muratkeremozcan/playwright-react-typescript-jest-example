import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  testDir: './playwright',
  workers: 3, // having too many worker throw error in CI https://github.com/microsoft/playwright/issues/4053
  use: {
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    baseURL: 'http://localhost:9091'
  },
};
export default config;
