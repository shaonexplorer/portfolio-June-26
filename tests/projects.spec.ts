import { test, expect } from '@playwright/test';

test('projects page shows recent project cards with links', async ({ page }) => {
  await page.goto('http://localhost:3000/projects');
  // Wait for cards to appear
  await page.waitForSelector('.project-card');
  const cards = await page.$$('.project-card');
  expect(cards).toHaveLength(3);
  // Verify each card has Live Demo and GitHub links
  for (const card of cards) {
    const live = await card.$('a:has-text("Live Demo")');
    const git = await card.$('a:has-text("GitHub")');
    expect(live).not.toBeNull();
    expect(git).not.toBeNull();
  }
});
