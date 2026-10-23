import{test} from'@playwright/test'
import { link } from 'fs';
test('Click on all links and get the text of those links', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0&scenario=4');
    await page.locator('//div[@class="bg-slate-800 h-10"]').first().waitFor();
    let content=await page.locator('//div[@class="bg-slate-800 h-10"]').allTextContents();
    for(let i=0;i<content.length;i++){
        console.log(content.join(" , "));
    }
//    console.log(content);
})
//Count the number of links
test.only('Get the count of the links', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0&scenario=4');
    //await page.locator('//div[@class="bg-slate-800 h-10"]').waitFor();
    //let links=await page.locator('//div[@class="bg-slate-800 h-10"]');
    let links=await page.locator('//div//ul[@class="flex items-center justify-center h-10 text-white gap-x-20 text-[14px]"]');
    await links.first().waitFor();
    let res=await links.allTextContents();
    console.log(res.join(" , "));
    // let count=0;
    // for(let i=0;i<=res.length;i++){
    //     count++;
    // }
    // console.log('Total Links:',count);
});
//Click on each link

// test.only('Click on each link',async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/link?sublist=0");
//     const options=['#men','#women','#kids','#electronics','#beauty']
//     for(let i=0;i<options.length;i++){
//         if(options[i]==='#Kids'){
//             await page.locator('(//section[@class="poppins text-[14px]"])[2]').click()
//             await page.locator('(//section[@class="poppins text-[14px]"])[3]').click()
//         }
//         await page.locator(options[i]).click();
//         await page.locator('//button[@class="bg-[#f97316] text-white rounded-sm px-3 text-3xl font-bold"]').click()
//     }
// });
test('Click on each link',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/link?sublist=0");
    const options=['#men','#women','#kids','#electronics','#beauty']
    for(let i=0;i<=options.length;i++){
       if(options[i]=='#men'&&'#women'){
        await page.locator(options[i]).click();
        await page.locator('//button[@class="bg-[#f97316] text-white rounded-sm px-3 text-3xl font-bold"]').click()
       }
       else if(options[i]==='#kids'){
        await page.locator('(//section[@class="poppins text-[14px]"])[2]').click()
        await page.locator('(//section[@class="poppins text-[14px]"])[3]').click()
       }
       else if(options[i]=='#electronics'&&'#beauty'){
        await page.locator(options[i]).click();
        await page.locator('//button[@class="bg-[#f97316] text-white rounded-sm px-3 text-3xl font-bold"]').click()
       }
    }
});