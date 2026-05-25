// import { test, expect } from "@playwright/test";

// test("verify nopCommerce homepage", async ({ page }) => {
//   await page.goto("https://demo.nopcommerce.com/", {
//     waitUntil: "domcontentloaded",
//     timeout: 60000,
//   });

//   const securityVerification = page.getByText("Verify you are human");

//   if (await securityVerification.isVisible().catch(() => false)) {
//     test.skip(
//       true,
//       "Cloudflare security verification appeared. This should be disabled or allowlisted in test environment."
//     );
//   }

//   await expect(page).toHaveTitle(/nopCommerce demo store/, {
//     timeout: 60000,
//   });

//   await expect(page.locator(".header-logo img")).toBeVisible({
//     timeout: 60000,
//   });


//   await page.getByLink("Register").click();

//   await page.getByLabel("First name:").fill("Jhon");
//   await page.getByLabel("Last name:").fill("Kenedy");
//   await page.getByLabel("Email:").fill("abc@gmail.com");
// });