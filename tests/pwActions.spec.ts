import{test, expect, Locator}from "@playwright/test";


test('Text Input Actions', async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   const textBox: Locator = page.locator('#autocomplete');
   await expect(textBox).toBeVisible();
   await expect(textBox).toBeEnabled();
   await textBox.click();
await page.keyboard.type('Rohith');

const enteredValue: string = await textBox.inputValue();
console.log("input value of the name", enteredValue);
expect(enteredValue).toBe("Rohith");
await page.waitForTimeout(3000);

const sundayCheckbox : Locator = page.getByLabel('bmw');
await sundayCheckbox.check();
await expect(sundayCheckbox).toBeChecked();

});