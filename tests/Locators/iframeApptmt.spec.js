import {test} from '@playwright/test'

test('Practice schedule appoitment',async({page})=>{
    await page.evaluate(()=>{
        document.body.style.zoom='70%'
    })
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.goto("https://www.bokfinancial.com/location-and-contact-us/appointment");
    await page.locator("(//a[@class='jsInterstitialAptTypePersonalInPerson btn btn-prime'])[1]").click();
    
    let [page2]=await Promise.all([
     page.waitForEvent('popup'),
     //page.locator("(//a[@class='btn btn-primary'])[1]").click()
     page.getByRole('link',{name:'New Account Appointments'}).first().click()
    ]);
    //Select a banking center
    await page2.locator("#location").fill("Texas");
    await page2.keyboard.press('ArrowDown');
    await page2.keyboard.press('Enter');
    await page2.locator('#bokftx238-label').click();
    await page2.locator('#nextBtn').click();
    // await page2.locator('#personalsavings').click();
    //Select appointment type
    await page2.getByText('Open a Personal Checking Account').click();
    await page2.locator('body').press('ControlOrMeta+-');
    await page2.getByRole('button', { name: 'Continue' }).click();
    await page2.waitForTimeout(3000);
    //Select Date and Time
    await page2.getByRole('button',{name:'October 16'}).click();
    await page2.getByRole('button',{name:'11:00 AM'}).click();
    await page2.getByRole('button', { name: 'Continue' }).click();
});