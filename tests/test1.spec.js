const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  // Navigate to the website
  await page.goto('http://localhost:3000');

  // Get the page content
  const pageContent = await page.textContent('a');

  // Check that the page content contains the expected text
  expect(pageContent).toContain('Kevin and Gabe');
});
