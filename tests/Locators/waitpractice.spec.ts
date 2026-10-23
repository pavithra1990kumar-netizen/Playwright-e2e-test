import {test} from '@playwright/test'
test('Click on show pwd icon', async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=3");
    await page.locator('input#password').fill('demo@1234');
    await page.locator('input#password').inputValue();
    await page.getByRole('img',{name:'Show Password'}).click();
    //await page.locator('//span[@class="absolute text-slate-600 text-[18px] bg-gray-100"]').click();
    await page.pause();
})

//Scenario 2
test('Check the button click status',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0&scenario=1");
    await page.getByRole('button',{name:'Yes'}).click();
    let a=await page.locator('//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]').innerText();
    console.log(a);
})

//Scenario 3
test('Wait for text to be visible',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    await page.locator('#Wikipedia1_wikipedia-search-input').fill('Money');
    await page.locator('//input[@class="wikipedia-search-button"]').click();
    await page.locator('#wikipedia-search-result-link').first().waitFor({timeout:8000,state:'visible'});
    //await page.locator('#wikipedia-search-result-link',{hasText:"Money Heist"}).waitFor();
    //await page.locator('#wikipedia-search-result-link').first().waitFor();
    let a=await page.locator('#wikipedia-search-result-link').allTextContents();
    console.log(a);
    //await page.pause();
})

//Scenario 4
test('Wait for selector',async({page})=>{
    await page.goto('https://www.amazon.in/');
    //await page.waitForSelector('//div[@class="nav-search-field"]',{state:'visible'});
    //await page.locator('//div[@class="nav-search-field"]').fill('women');
    await page.getByPlaceholder('Search Amazon.in').fill('women');
    await page.locator('#sac-suggestion-row-7').first().waitFor()
    let res=(await page.locator('//div[@class="left-pane-results-container"]').allTextContents());
    console.log(res.join(","));
})
test.only('Practice custom waits',async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@role='button']").click()
    await page.waitForTimeout(1000);
    await page.getByRole('textbox',{name:'Search for Products, Brands and More'}).fill('hp laptop')
    await page.locator("//ul[@class='VCplLH lTpUwR bRjjIF _1psv1ze5l _1psv1ze9l _1psv1ze7c _1cisqlf2']").first().waitFor()
    let values=await page.locator("//ul[@class='VCplLH lTpUwR bRjjIF _1psv1ze5l _1psv1ze9l _1psv1ze7c _1cisqlf2']").allTextContents()
    console.log(values);
    
})