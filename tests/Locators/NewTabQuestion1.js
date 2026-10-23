import {test} from '@playwright/test'
test('Click on help button from the new tab',async ({browser}) => {
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.redbus.in/");
    //Click on user agreement link in the footer, opens the page in new tab
    let[page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link',{name:'User agreement'}).click()
    ])
    await page.waitForTimeout(3000);
    console.log(page2.url());
    //Click on help icon, opens the page in new tab
    let [page3]=await Promise.all([
    page2.waitForEvent('popup'),
    page2.click('//*[@class="icon icon-help_new icon_rb_secondary_item"]')
    ])
    await page.waitForTimeout(3000);
    console.log(page3.url());
    //In the 3rd tab, click on 'Login to your account'----------GIVING ERROR----------
    page3.click('//button[@class="primaryButton"]');
    //page3.click('//*[@id="reactContentMount"]/div/div[2]/div[1]/button')
    await page.waitForTimeout(3000);
    await page.bringToFront();
    await page.waitForTimeout(3000);
})