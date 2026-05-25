import{test, expect, Locator} from "@playwright/test";

test("xpath demo in playwright", async({page})=>{

    await page.goto("https://www.pearsonvue.com/us/en/test-takers/demo-test.html")

    const absolutepathlogo: Locator = page.locator('//*[@id="main-content"]/div/div/section/div/div/div/div/p[2]/a');
    await expect(absolutepathlogo).toBeVisible(); // assertion
    await absolutepathlogo.click(); // action
   

})