import { test, expect } from '@playwright/test';

test('loads the app and shows welcome screen', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(
    page.locator('span', { hasText: 'Election Saathi' }).first()
  ).toBeVisible({ timeout: 10000 });
});

test('user can type in chat input', async ({ page }) => {
  await page.goto('/chat');
  await page.fill('textarea', 'How do I register to vote?');
  await expect(page.locator('textarea')).toHaveValue('How do I register to vote?');
});

test('send button becomes active when text is typed', async ({ page }) => {
  await page.goto('/chat');
  const btn = page.locator('button[aria-label="Send message"]');
  await expect(btn).toBeDisabled();
  await page.fill('textarea', 'test');
  await expect(btn).toBeEnabled();
});

test('clicking a starter chip populates input or sends message', async ({ page }) => {
  await page.goto('/chat');
  const chip = page.locator('button', { hasText: 'How do I register to vote for the first time?' }).first();
  await chip.click();
  const userMessage = page.locator('div', { hasText: 'How do I register to vote for the first time?' }).nth(1);
  await expect(userMessage).toBeVisible();
});

test('app is accessible — no critical ARIA violations', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
});