//Launch url
//Fill in the registration details
//Click on Register button to register the new user
//Verify the success mssg for a new user creation

import {test} from '@playwright/test'
import Home from "../../POM/Home.page.js"
import Registration from "../../POM/Registration.page.js"
import testdata from "../../ParaBankTestData/RegistrationPage.json"
test('Register user',async ({page}) => {
    //let Registrationpage=new Registration(page)
    let url=testdata.url
    let firstName=testdata.FirstName
    let lastname=testdata.LastName
    let address=testdata.Address
    let city=testdata.City
    let state=testdata.State
    let zipcode=testdata.ZipCode
    let phonenum=testdata.Phonenum
    let ssn=testdata.SSN
    let usn=testdata.username
    let pwd=testdata.password
    let conpwd=testdata.confirmpwd

    let regpage=new Registration(page)
    let homepage=new Home(page)
    await page.goto(url)
    await homepage.Registerlnk.click()
    await regpage.FirstNametxtfield.fill(firstName)
    await regpage.LastNametxtfield.fill(lastname)
    await regpage.Addresstxtfield.fill(address)
    await regpage.Citytxtfield.fill(city)
    await regpage.Statetxtfield.fill(state)
    await regpage.ZipCodetxtfield.fill(zipcode)
    await regpage.Phonenumtxtfield.fill(phonenum)
    await regpage.SSNtxtfield.fill(ssn)
    await regpage.usernametxtfield.fill(usn)
    await regpage.passwordtxtfield.fill(pwd)
    await regpage.confirmpwdtxtfield.fill(conpwd)
    await regpage.Registerbutton.click()
    let mssg= await regpage.successmssg.textContent()
    console.log(mssg);
    await page.screenshot({path:"screenshot/Welcomepage.png"})
    
})