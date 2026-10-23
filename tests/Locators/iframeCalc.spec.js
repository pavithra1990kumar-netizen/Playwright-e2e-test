import {test} from '@playwright/test'
test('working on frames',async ({page}) => {
    await page.goto('https://www.bankoftexas.com/personal/products-and-services/loans-and-lines-of-credit/auto-loans#calc')
    await page.keyboard.press('ControlOrMeta+-');
    await page.keyboard.press('ControlOrMeta+-');
    // await page.evaluate(()=>{
    //     document.body.style.zoom='70%';
    // });
    await page.waitForTimeout(3000);
    // let size=await page.viewportSize();
    // console.log(size);
    //await page.setViewportSize({width:1920, height:1080});
    await page.getByRole('button',{name:'Should I refinance my auto loan at a lower rate?'}).click()
    //Locate the iframe containin calcxml
    let frame= await page.locator('iframe[title="Should I refinance my car"]').contentFrame();
    //await frame.locator('#calculator').fill("test");
    await frame.getByRole('textbox',{name:'Current loan balance ($)'}).fill('3434');
    await page.waitForTimeout(3000);
    //Click on calculate button
    await frame.getByRole('button',{name:'Calculate'}).click();
})