import {test} from '@playwright/test'
test('Multiple tabs',async({browser})=>{
let context= await browser.newContext()
let page=await context.newPage()
await page.goto("https://demoapps.qspiders.com/ui/link/linkNew?sublist=1")
const data=[
    {locator:'#link_a'},
    {locator:'#link_b'},
    {locator:'#link_d'}]
    for(let link of data){
let[page1]=await Promise.all([
page.waitForEvent('popup'),
//const option=['#link_a','#link_b','#link_d']
await page.click('link.locator')])
await page.waitForTimeout(3000)
console.log(page1.url());
    }
})
