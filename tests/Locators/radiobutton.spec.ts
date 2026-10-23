import {expect, test} from '@playwright/test'
test('Practice radio button',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0&scenario=2")
    await page.locator('#attended_a').click();
    await page.waitForTimeout(2000);
    await expect(await page.locator('#attended_e').isChecked()).toBeFalsy()
    await page.waitForTimeout(2000);
})
//Script to click on disabled radio button
test.only("Disabled button",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio/disabled?sublist=2")
    await page.locator('#attended_ab').click({force:true});
    await page.waitForTimeout(2000);
})
//Script to count the number of radio buttons in the page
test.only("Disabled button",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio/disabled?sublist=2")
    