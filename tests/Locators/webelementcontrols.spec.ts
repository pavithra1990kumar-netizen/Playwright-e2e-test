import {test} from "@playwright/test";
test('Web Element controls practice', async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/')    
    await page.locator('//a[@class="block w-full h-full"]').click();
    console.log(page.url());
    await page.getByRole('link',{name:'Login Now'}).click();

})
test.only('Login',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/login');
    await page.getByText('Without placeholder').click();
    await page.locator('#email').fill('abac@gmail.com');
    await page.locator('#password').fill('demo@123');
    let result=await page.getByRole('button',{name:'Login'}).isEnabled();
    console.log(result);
    await page.getByRole('button',{name:'Login'}).click();
    console.log(await page.url());
    await page.pause();
})

test('Display all contents', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/login');
    await page.locator('//section[@class="poppins text-[15px]"]').first().waitFor();
    let text= await page.locator('//section[@class="poppins text-[15px]"]').allTextContents();
    //let text= await page.locator('//section[@class="poppins text-[15px]"]').all();
    console.log(text);
    //await page.pause();
})