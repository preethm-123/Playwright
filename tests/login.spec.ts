import { test, expect } from '@playwright/test';

test('End-to-end nopCommerce flow', async ({ page }) => {
  const email = `testuser${Date.now()}@gmail.com`;
  const password = 'Test@12345';

  await page.goto('https://demo.nopcommerce.com/');

  // Register
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Male').check();
  await page.getByLabel('First name:').fill('John');
  await page.getByLabel('Last name:').fill('Kennedy');
  await page.getByLabel('Email:').fill(email);
  await page.getByLabel('Password:').fill(password);
  await page.getByLabel('Confirm password:').fill(password);
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Your registration completed')).toBeVisible();

  // Logout
  await page.getByRole('link', { name: 'Log out' }).click();

  // Login
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').fill(email);
  await page.getByLabel('Password:').fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

  // Search product
  await page.getByPlaceholder('Search store').fill('Apple MacBook Pro');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'Apple MacBook Pro' }).first().click();

  // Add to cart
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByText('The product has been added to your shopping cart')).toBeVisible();

  // Cart validation
  await page.getByRole('link', { name: /Shopping cart/ }).click();
  await expect(page.getByText('Apple MacBook Pro')).toBeVisible();
});

test('Invalid login validation', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').fill('wronguser@gmail.com');
  await page.getByLabel('Password:').fill('WrongPassword123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByText('Login was unsuccessful')).toBeVisible();
});