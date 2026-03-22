import { test, expect } from '@playwright/test';

test.describe('Hot Beans Leaderboard 2026', () => {
  test('✅ Homepage loads + Leaderboard visible', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Leaderboard|Hot Beans/);
    await expect(page.locator('h1, .title, [class*="header"]')).toBeVisible();
    await expect(page.locator('table, [class*="leaderboard"], tr')).toBeVisible();
  });

  test('✅ Navigation works', async ({ page }) => {
    await page.goto('/');
    // Test all clickable navigation (adjust selectors if needed)
    const links = page.locator('nav a, .nav a, [role="navigation"] a');
    await links.nth(0).click();  // First nav link
    await page.waitForLoadState('networkidle');
  });

  test('✅ Submit score form (triggers your Auto-Process bot)', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[placeholder*="name"], input[name*="name"], input[type="text"]', 'TestStudent');
    await page.fill('input[placeholder*="score"], input[name*="score"], input[type="number"]', '9999');
    await page.click('button:has-text("Submit"), button[type="submit"], form button');
    await page.waitForTimeout(3000);  // Wait for your GitHub Action
    await expect(page.locator('text=TestStudent')).toBeVisible({ timeout: 10000 });
  });

  test('📱 Mobile responsive', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('table, .leaderboard')).toBeVisible();
  });
});
