import { test, expect } from "@playwright/test";

test("redirecting to the locale page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/en/");
});
