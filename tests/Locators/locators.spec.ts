import {test} from '@playwright/test'
test('Login page',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/login")
    //email- fetch the placeholder text and print the value entered into the textbox
    console.log(await page.locator("input#email").getAttribute('placeholder'));
    await page.locator("input#email").fill("ram@gmail.com");
    console.log(await page.locator("input#email").inputValue());

    //pwd- fetch the placeholder text and print the value entered into the textbox
    console.log(await page.locator('input#password').getAttribute('placeholder'));
    await page.locator('input#password').fill('demo@1233');
    console.log(await page.locator('input#password').inputValue());
    await page.getByText('Login').first().click();

    //get the title of the page and save the screenshot
    console.log(await page.title());
    await page.screenshot({path:"screenshot/login.png"});

    //click on the homepage image
    await page.locator('img.bg-white').click();
    let time= new Date().getTime();
    await page.screenshot({path:`screenshot/-page-${time}.png`});
})