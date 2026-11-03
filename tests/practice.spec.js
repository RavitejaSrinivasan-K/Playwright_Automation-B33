import { test, expect, chromium } from '@playwright/test';

test('Handle new tab / download report scenario', async ({  }) => {

   const browser = await chromium.launch({slowMo : 2000, headless : false})
   const context = await browser.newContext()
   const page = await context.newPage()

    // 1. Navigate to the main page
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');


    // 2. Wait for the new page event while clicking the "Download Report" button
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//button[text()="Download PDF File"]').click()
    ]);

    // 3. Wait for the new tab to load fully
    await newTab.waitForLoadState();

    // 4. Verify the URL or content of the new tab
    console.log('New Tab URL:', newTab.url());
    expect(newTab.url()).toContain("testautomationpractice");

    // 5. Close the new tab
    await newTab.close();

    // 6. Resume testing on the main page (main page remains active)
    console.log('Main Page Title:', await page.title());
    expect(page.url()).toContain("download");
});





import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // 1. Navigate to the login page
  await page.goto('https://example.com/login');

  // 2. Perform login actions
  await page.getByLabel('Username').fill('your_username');
  await page.getByLabel('Password').fill('your_password');
  await page.getByRole('button', { name: 'Log in' }).click();

  // 3. Wait until login succeeds (e.g., waiting for redirect or user dashboard element)
  await page.waitForURL('https://example.com/dashboard');
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();

  // 4. Save authentication state (cookies, localStorage, session) to file
  await page.context().storageState({ path: authFile });
});