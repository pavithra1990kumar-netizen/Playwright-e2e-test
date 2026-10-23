import {chromium, test} from "@playwright/test"
test("browser controls",async({page,browser})=>{
    await page.goto("https://www.google.com")
    console.log(await page.title());
    console.log(await page.url());
    // let size1= await page.viewportSize()
    // console.log(size1);
    // await page.setViewportSize({width:1000,height:500})
    // let size= await page.viewportSize()
    // console.log(size);
    //title
    await page.goto("https://www.amazon.in/")
//    let title= await page.title();
    console.log(await page.title());
    console.log(await page.url());
    })

    test("instance", async()=>{
        let browser=await chromium.launch();
        let context= await browser.newContext();
        let page=await context.newPage();
        await page.goto("https://www.google.com");
    })
test.only("screenshot",async({page})=>{
    await page.goto("https://www.irctc.co.in/nget/train-search")
    //single screenshot
    await page.screenshot({path:"screenshot/image1.png"});
    //multiple screenshots
    let time= new Date().getTime()
    await page.screenshot({path:`screenshot/-page-${time}.png`})
})


