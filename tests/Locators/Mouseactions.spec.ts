import {expect, test} from '@playwright/test'
test('Practice moouse actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.mouse.wheel(0,500);
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,-500);
    //Mouse hover
    await page.locator('#singleFileInput').hover();
    await page.waitForTimeout(2000);
    await page.locator('#input2').scrollIntoViewIfNeeded()
    await page.pause();
})
test('Practice1 mouse hover',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0');
    let img= page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer"]');
    await expect(img).toBeVisible();
    await img.click();
    await page.waitForTimeout(2000);
    await page.pause();
})
test('Practice2 mouse hover',async({page})=>{
    //await page.goto('https://demoapps.qspiders.com/ui/mouseHover/mouseHoverimage?sublist=1');
    //await page.locator('//img[@alt="order placed"]').hover();
    //await page.goto('https://demoapps.qspiders.com/ui/mouseHover/rating?sublist=2');
    //await page.locator('(//*[@class="Rating cursor-pointer"])[3]').hover();
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover/tab?sublist=3');
    let option=await page.locator('//*[@class="flex items-center justify-center h-10 text-white gap-x-20"]').allTextContents();
    await page.locator('//*[@class="kids p-4 relative"]').first().waitFor();
    console.log(option);
    //await page.locator('//*[@class="kids p-4 relative"]').hover();
    await page.waitForTimeout(2000);
    // await expect(img).toBeVisible();
    // await page.waitForTimeout(2000);
    // await img.hover();
    await page.pause();
})
//Drag and Drop
test('Drag & Drop practice',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0&scenario=1')
    await page.getByText('Drag Me');
    await page.mouse.move(200,500);
    await page.mouse.down();
    await page.mouse.move(200,500);
    await page.mouse.up();
})
//click & hold
test.only('Click & hold',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0');
    await page.locator('#circle').click();
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.mouse.up();
    await page.waitForTimeout(2000);
})
