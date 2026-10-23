import { expect, test } from "@playwright/test";
test("Practice textbox",async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
  await page.getByPlaceholder('Enter your name').fill('test')
  console.log(`Entered username is:`,await page.getByPlaceholder('Enter your name').inputValue());
  await expect(page.getByPlaceholder('Enter your name')).toBeVisible();
  await page.locator('#email').fill('test@gmail.com')
  await expect(page.getByPlaceholder('Enter Your Email')).toBeVisible();
  await page.locator('#password').fill('test23')
  console.log(`Entered password is:`,await page.locator('#password').inputValue());
  await expect(page.getByPlaceholder('Enter your password')).toBeVisible();
  await page.getByRole('img',{name:'Show Password'}).click()
  await page.waitForTimeout(2000);
  await page.getByRole('button',{name:'Register'}).click()
  expect(page.getByText('Registered successfully'));

  //Enter data into disabled text field
  await page.getByText('Disabled',{exact:true}).click()
  await page.getByRole('textbox',{name:'email'}).fill('ts45',{force:true})
  await page.getByRole('textbox',{name:'password'}).fill('3434ffs',{force:true})
  await page.getByRole('button',{name:'Login'}).click()
})
test('Practice button',async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0&scenario=2")
   await page.getByRole('button',{name:'Yes'}).click();
   await expect(page.getByText('You selected "Yes"')).toBeVisible();
   await page.waitForTimeout(2000);
   await page.getByRole('button',{name:'No'}).click()
   await expect(page.getByText('You selected "No"')).toBeVisible();
   //Right click on the button
   await page.getByText('Right Click',{exact:true}).click();
   await page.locator('#btn_a').click({button:"right"})
   let value=await page.locator("//div[@class='origin-top-right absolute left-[103%] top-[-20%] mt-2 w-32 z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left font-normal']").allTextContents()
   console.log(value);
   //Double click on the button
   await page.getByText('Double Click',{exact:true}).click()
   await page.waitForTimeout(1000);
   await page.getByText('Yes',{exact:true}).dblclick();
   await expect(page.getByText('You selected "Yes"')).toBeVisible();
   await page.getByText('No',{exact:true}).click({clickCount:2});
   await expect(page.getByText('You selected "No"')).toBeVisible();
   //Verify if the button is clicked
   await page.getByText('Submit Click',{exact:true}).click();
   await page.locator('#sat_a').click();
   await page.getByRole('button',{name:'Submit'}).click();
   await expect(page.getByText('You Selected "Yes"')).toBeVisible();
   await page.locator('#sat_b').click();
   await page.getByRole('button',{name:'Submit'}).click();
   await expect(page.getByText('You Selected "No"')).toBeVisible();
   //Check if the button is enabled or disabled
   await page.getByText('Disabled',{exact:true}).click()
   console.log(await page.locator('#submit').isDisabled())
   console.log(await page.locator('#submitButton').isEnabled())
   
})
test.only('Practice link clicks',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/link?sublist=0")
  const options=['#men','#women','#kids','#electronics','#beauty']
  for(let i=0;i<=options.length;i++){
    if(options[i]=='#men' && '#women'){
    await page.locator(options[i]).click()
    await page.locator("//button[@class='bg-[#f97316] text-white rounded-sm px-3 text-3xl font-bold']").click()
  }
  else if(options[i]=='#kids'){
    //continue;
    await page.locator('(//section[@class="poppins text-[14px]"])[2]').click()
    await page.locator('(//section[@class="poppins text-[14px]"])[3]').click()
  }
  else if(options[i]=='#electronics' && '#beauty'){
    await page.locator(options[i]).click();
    await page.locator("//button[@class='bg-[#f97316] text-white rounded-sm px-3 text-3xl font-bold']").click()
  }
}
})
test('Click on links opens in a new tab',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/link/linkNew?sublist=1&scenario=2")
  const links=['#link_a','#link_b','#link_c','#link_d','#link_e']
  let count =''
  for(let i=0;i<links.length;i++){
    let [a]=await Promise.all([
     page.waitForEvent('popup'),
     page.locator(links[i]).click(),
    ]);
    count++;
   console.log(a.url());
   console.log(await page.locator(links[i]).textContent())
    await a.waitForTimeout(1000);
    await a.close();
  }
  console.log(`Number of links: ${count}`);
})
test('Practice click on all the checkboxes',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
  const chkoptns=['#domain_a','#domain_b','#domain_c','#domain_d',
    '#mode_a','#mode_b','#mode_c','#mode_d',
    '#mode_e','#mode_f']
    let count=''
  for(let i=0;i<chkoptns.length;i++){
    await page.locator(chkoptns[i]).check();
    await page.waitForTimeout(1000);
    count++;
  }
  // for(let i=0;i<chkoptns.length;i++){
  //   await page.locator(chkoptns[i]).uncheck()
  //   await page.waitForTimeout(1000);
  // }
  await page.locator('#mode_g').click();
  console.log(`Number of checkboxes: ${count}`)
})
test('Practice radio buttons',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
  //Verify the radio butns are not selected
  console.log(await page.locator('#attended_a').isChecked());
  //Count the number of radio buttons on the page
  let a= page.locator('input[type="radio"]')
  let count=await a.count();
  console.log(`total num of radio butns: ${count}`);
  //Print the radio buttns text
  let btns1=await page.locator("//main[@class='flex flex-wrap justify-between w-full']").allInnerTexts();
  console.log(btns1);
  let btns2=await page.locator("//main[@class='flex  gap-10 ml-4']").allTextContents();
  console.log(btns2);
  
})
test('Click on image',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/image/linkImage?sublist=1")
  let lst=await page.getByAltText('img[alt="broken image"]').allInnerTexts()
  console.log(lst);
})
test('Practice selecting toggles',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/toggle?sublist=0&scenario=3")
  await page.locator('#tog').check()
})