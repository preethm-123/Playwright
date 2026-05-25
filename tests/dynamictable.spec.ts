

import {test, expect,Locator} from "@playwright/test";

test("Dynamic table handling", async({page})=> {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const tableRows: Locator = page.locator('#product tbody tr');
    const rowCount: number = await tableRows.count();
    console.log("Number of rows in the table:", rowCount);
    
    for(let i=0; i<rowCount; i++){
        const rowText: string = await tableRows.nth(i).innerText();
        console.log(`Row ${i+1}: ${rowText}`);
    }
})