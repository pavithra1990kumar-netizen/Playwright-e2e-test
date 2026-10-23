import{expect, test} from '@playwright/test'
test('Practice iframes',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill('test1')
    await page.frameLocator('//frame[@src="frame_2.html"]').locator("//input[@name='mytext2']").fill('test2')

    //Use locator and then swith to the frame using a method contentFrame()
    let frame= await page.locator("//frame[@src='frame_1.html']").contentFrame()
    await frame.locator("//input[@name='mytext1']").fill('testt')

    let frame4= await page.locator('//frame[@src="frame_4.html"]').contentFrame()
    await frame4.locator("//input[@name='mytext4']").fill('test343')

    let frame3= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'})
    await frame3.locator("//input[@name='mytext3']").fill('test33')
    
    let inframe=page.frame({url:'https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true'})
    await inframe.locator('#i9').click();
})

test('Practice multiple frames',async({page})=>{
    await page.goto("https://qaplayground.com/practice/iframes");
await page.getByTestId('iframe-outer').scrollIntoViewIfNeeded();

const innerFrame = page
  .frameLocator('[data-testid="iframe-outer"]')
  .frameLocator('iframe[src="/practice-frames/iframe-nested-inner.html"]');

await innerFrame.locator('#inner-secret-input').fill('2345');

await page.waitForTimeout(1000);

await innerFrame.getByRole('button', { name: 'Unlock' }).click();
})

test('Practice multipl frames',async({page})=>{
    await page.goto("https://qaplayground.com/practice/iframes");
    // let frame1=await page.getByTestId("iframe-basic").contentFrame();
    // await frame1.locator("#iframe-name-input").scrollIntoViewIfNeeded();
    // await frame1.locator("#iframe-name-input").fill('RAM')
    // await frame1.locator("//button[@id='iframe-submit-btn']").click();
    // //Scenario 2
    // let frame2=await page.getByTestId("iframe-form").contentFrame()
    // await frame2.locator("//*[@id='iframe-lang-select']").selectOption({value:'javascript'})
    // await frame2.getByTestId('iframe-agree-chk').click()
    // await frame2.locator("//button[@id='iframe-save-btn']").click()
    // //Scenario 3
    // let frame3= page.getByTestId("iframe-frame-1").contentFrame()
    // await frame3.locator("//*[@id='f1-action-btn']").click()
    // await page.waitForTimeout(1000);
    // await expect(frame3.getByText('Frame One clicked ✓')).toBeVisible()

    // let frame4= page.frameLocator('//iframe[@src="/practice-frames/iframe-multi-2.html"]')
    // await frame4.locator("//button[@id='f2-action-btn']").click();
    // await expect(frame4.getByText('Frame Two activated ✓')).toBeVisible();

    // let frame5=page.frameLocator('//iframe[@src="/practice-frames/iframe-multi-3.html"]')
    // await frame5.getByRole('button',{name:'Confirm Action'}).click()
    await page.getByTestId('iframe-outer').scrollIntoViewIfNeeded()
    let frame6=  page.getByTestId('iframe-outer').contentFrame()
    .frameLocator('//iframe[@src="/practice-frames/iframe-nested-inner.html"]')
    .locator('#inner-secret-input').fill('2345')
    await page.waitForTimeout(1000);
    //await frame7.getByTestId('iframe-inner-submit').click();
    await frame6.frameLocator('//iframe[@src="/practice-frames/iframe-nested-inner.html"]')
    .getByRole('button',{name:'Unlock'}).click()

})
test('Practice frames',async({page})=>{
    await page.goto("https://qaplayground.com/practice/iframes")
  //  await page.frameLocator('[data-testid="iframe-dynamic"]').scrollIntoViewIfNeeded();

    let frm=await page.frameLocator('[data-testid="iframe-dynamic"]')
    .locator('#dyn-code-input').fill('test')
    await page.waitForTimeout(1000);
    let clk= await page.frameLocator('[data-testid="iframe-dynamic"]')
    await clk.getByRole('button',{name:'Reveal Secret'}).click();
    await expect(clk.getByText('Secret revealed: test ✓')).toBeVisible();
    await page.waitForTimeout(2000);
})
test.only('Form validation inside iframe',async({page})=>{
    await page.goto("https://qaplayground.com/practice/iframes")
    let pg=await page.frameLocator('[data-testid="iframe-validation"]')
    .locator('#val-name').fill('22tet')
    await page.frameLocator('[data-testid="iframe-validation"]')
    .getByTestId('iframe-val-email').fill('abc@gmail.com')
    await page.frameLocator('[data-testid="iframe-validation"]')
    .locator("//button[@id='iframe-val-submit']").click()
    //.expect(page.getByText('Registered successfully ✓')).toBeVisible()
    
})