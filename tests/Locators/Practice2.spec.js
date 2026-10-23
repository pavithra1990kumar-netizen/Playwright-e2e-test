import{test}from '@playwright/test'
import Login from "../../TestData/Login.json";
test('practice',async ({page}) => {
    for(let d of Login.valid){
        await page.goto(d.url);
        await page.locator('input#username').fill(d.username);
        await page.locator('input#password').fill(d.password);
        await page.getByRole('button',{name:'Submit'}).click();
        await page.waitForTimeout(2000);
        let url=page.url();
        if(url!=d.url){
            await page.getByRole('link',{name:'Log out'}).click();
            
        }else{
            
            console.log('User loggedIn and loggedOut successfully');
        }
    }
    for(let d of Login.invalid){
        await page.goto(d.url);
        await page.locator('input#username').fill(d.username);
        await page.locator('input#password').fill(d.password);
        await page.getByRole('button',{name:'Submit'}).click();
        let url=page.url();
        if(url!=d.url){
            await page.getByRole('link',{name:'Log out'}).click();
            
        }else{
            
            console.log('User login failed due to invalid credentials');
        }
    }
});