//Enter data into text field
import {test} from '@playwright/test'
test('Enter data into text field', async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('input#name').fill('demo')
    //get the placeholder text and input value
    console.log(await page.locator('input#name').getAttribute('placeholder'));
    console.log(await page.locator('input#name').inputValue());
    await page.getByPlaceholder('Enter Your Email').fill('demo123@gmail.com')
    //get the placeholder text and input value
    console.log(await page.getByPlaceholder('Enter Your Email').getAttribute('placeholder'));
    console.log(await page.getByPlaceholder('Enter Your Email').inputValue());
    await page.getByPlaceholder('Enter your password').fill('demo@123')
    //get the placeholder text and input value
    console.log(await page.getByPlaceholder('Enter your password').getAttribute('placeholder'));
    console.log(await page.getByPlaceholder('Enter your password').inputValue());
    //Click on hide pwd icon
    await page.getByRole('img',{name:'Show Password'}).click();
    //Click on show pwd icon
    await page.getByRole('img',{name:'Hide Password'}).click();
    //Click on register button
    await page.getByRole('button',{name:'Register'}).click();
})

//Click on Register button, without entering values into the text field
test.only('Validate error messages',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=6");
    await page.getByText('Without placeholder').click();
    await page.getByRole('button',{name:'Register'}).click();
    let mssg=[ page.getByText('Name is required'),
         page.getByText('Email is required'),
         page.getByText('Password is required')
    ]
    for(let i=0;i<mssg.length;i++){
        console.log(await mssg[i].textContent());
    }
})