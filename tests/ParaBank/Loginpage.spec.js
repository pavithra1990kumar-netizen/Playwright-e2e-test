import {test} from '@playwright/test'
import Loginpage from '../../POM/Loginpage.page'
import Login from '../../ParaBankTestData/Login.json'
test('Valid Login',async ({page}) => {
    for(let valid of Login.ValidLogin){
        let Linpage=new Loginpage(page)
        let URL=new Loginpage.ValidLogin.URL
        let username=new Loginpage.username
        let password=new Loginpage.password
        await page.goto(ValidLogin.URL);
        await Linpage.username.fill(ValidLogin.username);
        await Linpage.password.fill(ValidLogin.password);
        await Linpage.LoginButton.click();
    }
})