//Launch url
//Fill in the registration details
//Click on Register button to register the new user
//Verify the success mssg for a new user creation
//Open new account chkig/savig and log the acc#,success mssg

import {expect, test} from '@playwright/test'
import Home from "../../POM/Home.page.js"
import Registration from "../../POM/Registration.page.js"
import OpenNewAccount from "../../POM/OpenNewAccount.page.js"
import AccountsOverview from "../../POM/AccountsOverview.page.js"
import TransferFunds from "../../POM/TransferFunds.page.js"
import BillPay from '../../POM/BillPay.page.js'
import testdata from "../../ParaBankTestData/RegistrationPage.json"
import testdata1 from "../../ParaBankTestData/TransactionData.json"
import Billpaydata from "../../ParaBankTestData/BillPayPay.json"


test('Register user and create new account',async ({page}) => {
    //Registration details
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
    let amt=testdata1.Amount
    //Bill pay details
    let pynm=Billpaydata.PayeeName
    let pyadd=Billpaydata.Address
    let pycty=Billpaydata.City
    let pyst=Billpaydata.State
    let pyzpcd=Billpaydata.ZipCode
    let pyph=Billpaydata.Phonenum
    let pyacnm=Billpaydata.AccNum
    let pyvyacnm=Billpaydata.VerfiyAcc
    let pyamt=Billpaydata.Amount

    let homepage=new Home(page)
    let regpage=new Registration(page)
    let opnnewacct=new OpenNewAccount(page)
    let accovrvw=new AccountsOverview(page)
    let trsfrfund=new TransferFunds(page)
    let bilpy=new BillPay(page)

    await page.goto(url)
    //Page1- Complete the registration
    
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

    //Display the reg success mssg and save the screenshot
    let regmssg= await regpage.successmssg.textContent()
    console.log(regmssg);
    await page.screenshot({path:"screenshot/Welcomepage.png"})

    //Page2- Create new account
    await opnnewacct.OpenNewAccountlink.click()
    await opnnewacct.AccountTypedropdwn.selectOption({index:1})
    await page.waitForTimeout(2000);
    await opnnewacct.OpenNewAccountBtn.click()
    await page.waitForTimeout(2000);

    //Display the accout creatd success mssg and save the screenshot
    let accopnmssg= await opnnewacct.Accopnmssg.textContent()
    console.log(accopnmssg);
    await page.screenshot({path:"screenshot/Accountopensuccmssg.png"})

    //Click on the new account#
    let accno=await opnnewacct.newAcctNum.textContent();
    console.log(`Account Number is: ${accno}`);
    await opnnewacct.newAcctNum.click()

    //Page3- Click on Accounts Overview and check if the new account# is present
    await accovrvw.Accoviwlink.click()
    await page.waitForTimeout(2000);

    let pagename=await accovrvw.Accovrviwheading.isVisible()
    if(pagename){
        console.log("User is in Accounts Overview page")
    }else{
        console.log("Unable to find the page name")
    }

    //Check if the Accounts Overivew page exists, table has the new acc# and click on it
    await expect(page.locator(`#accountTable a:text-is("${accno}")`)).toBeVisible();

    if(accno){
        await page.getByRole('link', { name: accno }).click();
        console.log(`Account number clicked, ${accno}`)
    }else{
        console.log('Acc# doesnot exists')
    }

    //Page4- Transfer funds from the newly created acc# to any acc#
    await trsfrfund.trsfrfudlink.click()
    await page.waitForTimeout(2000)
    let hd=await trsfrfund.trsfrheading.isVisible()
    if(hd){
        console.log("User is in Transfer Funds page")
    }else{
        console.log("Unable to find the page")
    }
    await page.waitForTimeout(2000);
    //Enter some amount and click on transfer button
    await trsfrfund.amount.fill(amt.toString())
    await trsfrfund.fromaccnodropdown.selectOption(accno)
    await trsfrfund.transferbutn.click();
    await page.waitForTimeout(2000);
    //Display the success mssg and save the screenshot
    let trnsfrmssg= await trsfrfund.trsfrmssg.textContent()
    //console.log(trnsfrmssg);
    let tsmt=await trsfrfund.trframt.textContent()
    let tsfm=await trsfrfund.trsfrmact.textContent()
    let tsto=await trsfrfund.trstoact.textContent()
    console.log(`${trnsfrmssg}, ${tsmt},${tsfm},${tsto}`)
    await page.screenshot({path:"screenshot/Transferredmssg.png"})

    //Page5- BillPay enter the payee details
    await bilpy.Billpaylink.click()
    await bilpy.Payenme.fill(pynm)
    await bilpy.Payeaddrs.fill(pyadd)
    await bilpy.Payecty.fill(pycty)
    await bilpy.Payestat.fill(pyst)
    await bilpy.Payezicd.fill(pyzpcd)
    await bilpy.Payephnum.fill(pyph)
    await bilpy.Payeaccnum.fill(pyacnm)
    await bilpy.Payevryacc.fill(pyvyacnm)
    await bilpy.Payeamt.fill(pyamt.toString())
    await bilpy.Payefrmacctdrpdwn.selectOption(accno)
    await page.waitForTimeout(1000)
    await bilpy.Payesndpymtbuttn.click();
    
    //Display the Bill Payment Complete mssg details
    let payrsmsg=await bilpy.PayeeResult.textContent()
    //console.log(payresmsg)
    let blamt=await bilpy.Billpayamt.textContent()
    let blfrmact=await bilpy.Billpayfrmacct.textContent()
    await page.screenshot({path:"screenshot/BillPaySucsmsg.png"})
})