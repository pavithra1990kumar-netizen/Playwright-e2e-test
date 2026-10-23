import {chromium, test} from '@playwright/test' 
test.skip('Annotation test 1 practice', async({page})=>{
    console.log("Test 1");
})
test.only("test 2", async()=>{
    let browser=await chromium.launch();
    let context=await browser.newContext();
    let page=await context.newPage();
    console.log("test 2");
})
test("test 3", async({page})=>{
    console.log("test 3");
})
test("test 4", async({page})=>{
    console.log("test 4");
})