import {test,expect} from '@playwright/test'
test("fixture practice2", async({browserName,browser})=>{
    let context= await browser.newContext()
    let page= await context.newPage()
    await page.goto("https://www.amazon.in")
    console.log(await page.title());
    console.log(await page.url());
});