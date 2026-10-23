//Launch url
//Click on register user link from home page
//Complete the user registration, Verify the success mssg
//Open new account chkig/savig and log the acc#,success mssg

import {test} from '@playwright/test'
import Home from "../../POM/Home.page.js"
import Registration from "../../POM/Registration.page.js"
import testdata from "../../ParaBankTestData/RegistrationPage.json"
import OpenNewAccount from "../../POM/OpenNewAccount.page.js"

test('Open new account',async ({page}) => {
    let opnnewacct=new OpenNewAccount(page)
    await opnnewacct.OpenNewAccountlink.click()
    await opnnewacct.AccountTypedropdwn.selectOption({index:1})
    await opnnewacct.OpenNewAccountBtn.click();
    let mssg=await opnnewacct.Accopnmssg.textContent();
    console.log(mssg);
    await page.screenshot({path:"screenshot/AccountOpenedmssg.png"})
    await opnnewacct.newAcctNum.click();

})
