import{expect, test} from '@playwright/test'
test('Click on button',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.locator('(//*[@class="poppins text-[14px]"])[2]').click();
    await page.locator('#btn').click();
    let mssg= await page.locator('//*[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]').innerText()
    console.log(mssg);
    await page.locator('#btn_two').click();
    let mssg2=await page.locator('//*[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]').innerText()
    console.log(mssg2);
})
//click on the buttons and display the message in console
test('Click on button using loop',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    await page.locator('(//*[@class="poppins text-[14px]"])[2]').click();
    const bttns=['#btn','#btn_two'];
    for(let i=0;i<bttns.length;i++){
        await page.locator(bttns[i]).click();
        let mssg=await page.locator('//*[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]').innerText()
        console.log(mssg);
    }
});

//Right click on the button
test('Right click on the button',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.locator('#btn_a').click({button:"right"});
    let options=await page.locator('//div[contains(@class,"origin-top-right")]').allTextContents();
    console.log(options);
})

//Double click on button
test.only('Double click on the button',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.locator('(//a[contains(@class,"poppins ps-1 pe-3 py-1")])[3]').click();
    const buttns=['#btn_a', '#btn_b']
    for(let i=0;i<buttns.length;i++){
        if(buttns[i]=='#btn_a'){
        await page.locator(buttns[i]).dblclick();
        await expect(page.locator('(//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"])[1]')).toHaveText('You selected "Yes"');
        }
        else if(buttns[i]=='#btn_b'){
        await page.locator(buttns[i]).dblclick();
        await expect(page.locator('(//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"])[1]')).toHaveText('You selected "No"');
         } }
});
//Double click button without looping
// test.only('Double click on the button without loop',async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
//     await page.locator('(//a[contains(@class,"poppins ps-1 pe-3 py-1")])[3]').click();
//     await page.locator('#btn_a').click({clickCount:2});
//     await expect(page.locator('(//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"])[1]')).toHaveText('You selected "Yes"');
//     await page.locator('#btn_b').click({clickCount:2});
//     await expect(page.locator('(//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"])[1]')).toHaveText('You selected "No"');
// });

//Right click on a button and veify the button is clicked
test('right click and veify the button is clicked',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1&scenario=2")
    await page.getByRole('button',{name:'Right Click'}).click({button:'right'})
    let options=await page.locator('//div[@class="py-1 ps-1 hover:bg-orange-300"]').allTextContents()
    console.log(options);
    await expect(page.locator('(//div[@class="py-1 ps-1 hover:bg-orange-300"])[1]')).toHaveText('Yes')
})

//click on the radio and submit buttons
test('Click on the radio and submit buttons',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonSubmit?sublist=3')
    let res=await page.locator('#btn_abh').isEnabled()
    console.log(res);
    //await page.locator('#sat_b').click()
    //await expect(page.locator('#sat_b')).toBeChecked()
    //await expect(page.locator('//span[@class="text-green-600 p-1 px-2 rounded-md"]')).toHaveText('You Selected "No"');
})

//Check if the button is disabled
test.only('Check if the butn is disabled',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    const res=['#submit','#submitButton']
    for(let i=0;i<res.length;i++){
        let mssg= await page.locator(res[i]).isDisabled();
        console.log(mssg);
    }
    // await page.locator('#submit').isDisabled()
    // await page.locator('#submitButton').isDisabled()
})