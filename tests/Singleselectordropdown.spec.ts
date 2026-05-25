import{test, expect, Locator} from "@playwright/test"

test("Single select drop down", async({page})=> {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

const dropdown = page.locator('#dropdown-class-example'); // Locator for the dropdown
    await dropdown.selectOption('option2'); // Select 'Option2' from the dropdown

    // Verify the selected option
    const selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe('option2');
});