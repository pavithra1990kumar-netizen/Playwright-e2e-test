import {Page,test} from '@playwright/test';
test("fixture practice",async({page})=>{
    await page.goto("https://www.amazon.in")
});