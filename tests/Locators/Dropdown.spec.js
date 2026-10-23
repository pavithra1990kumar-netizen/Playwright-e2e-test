import {test} from '@playwright/test'
import { text } from 'node:stream/consumers';
test('Practice different dropdowns',async ({page}) => {
    //Select by visible text
    await page.goto("https://qaplayground.com/practice/dropdowns");
    await page.locator("select#fruitSelect").selectOption("Banana");
    await page.waitForTimeout(2000);
    //Select by attribute
    await page.locator("select#countrySelect").selectOption({value:"united-states"});
    //select last lang and read all options
    await page.locator("select#languageSelect").selectOption({index:3})
    let values=await page.locator("select#languageSelect").allTextContents();
    console.log(values);
    //Multi-select
    await page.locator("select#heroSelect").selectOption([{index:1},{index:3}])
    //Custom dropdown
    await page.locator("#priorityDropdownTrigger").click();
    let options=await page.locator("#priorityDropdownList").waitFor();
    console.log(options.length);
    //  let count=await options.count();
    //  for(let i=0;i<count;i++){
    //     console.log(await options[i]);
    //  }
    //  await page.waitForTimeout(2000);
    // for(let a of valu){
    //     let text=await valu.textContent();
    //     if(text.includes('High Priority')){
    //         await valu.click()
    //     }
    // }
})