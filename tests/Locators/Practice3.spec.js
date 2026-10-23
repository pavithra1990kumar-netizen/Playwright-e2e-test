import{expect, test} from '@playwright/test'
import path from 'node:path'
import { parseEnv } from 'node:util'
test('Practice drag and drop',async({page})=>{
    await page.goto("https://qaplayground.com/practice/drag-drop")
    let src= page.getByTestId("dd-item")
    let trgt=page.getByTestId("dd-drop-zone")
    await src.dragTo(trgt)
    await page.waitForTimeout(1000);
})
test('Scenario 2: Drag to Correct Labelled Zone (Medium)',async({page})=>{
    await page.goto("https://qaplayground.com/practice/drag-drop")
    let src1=page.locator("//div[@data-card-id='card-1']")
    let trgt1=page.locator("//div[@data-zone-id='zone-a']")
    await src1.dragTo(trgt1)
    await page.waitForTimeout(1000);
    let src2=page.locator("//div[@data-card-id='card-2']")
    let trgt2=page.locator("//div[@data-zone-id='zone-b']")
    await src2.dragTo(trgt2)
    await page.waitForTimeout(1000);
    let src3=page.locator("//div[@data-card-id='card-3']")
    let trgt3=page.locator("//div[@data-zone-id='zone-c']")
    await src3.dragTo(trgt3)
})
test('Scenario 3: Reorder a Sortable List (Medium)',async({page})=>{
    await page.goto("https://qaplayground.com/practice/drag-drop")
    await page.locator("//li[@data-item-id='item-2']").hover()
    await page.mouse.down()
    await page.locator("//li[@data-item-id='item-1']").hover()
    await page.mouse.up()
})
test('Scenario 4: Kanban Column Transfer (Hard)',async({page})=>{
    await page.goto("https://qaplayground.com/practice/drag-drop")
    await page.locator("//div[@data-task-id='task-2']").hover()
    await page.mouse.down()
    await page.locator("(//div[@data-column-id='done'])[1]").hover()
    await page.mouse.up()
    await page.locator("//div[@data-task-id='task-3']").hover()
    await page.mouse.down()
    await page.locator("(//div[@data-column-id='done'])[1]").hover()
    await page.mouse.up()
})
test('Scenario 5: Type-Restricted Drop Zones (Hard)',async({page})=>{
    await page.goto("https://qaplayground.com/practice/drag-drop")
    await page.locator("//div[@data-item-type='shape-circle']").hover()
    await page.mouse.down()
    await page.locator("//div[@data-accepts='shape-circle']").hover()
    await page.mouse.up()
    let src= page.locator("//div[@data-item-type='shape-square']")
    let trgt=page.locator("//div[@data-accepts='shape-square']")
    await src.dragTo(trgt)
    let src1= page.locator("//div[@data-item-type='shape-triangle']")
    let trgt1=page.locator("//div[@data-accepts='shape-triangle']")
    await src1.dragTo(trgt1)
})
test('Scenario 6: Multi-Column Board (Challenge)',async({page})=>{
    await page.goto("https://qaplayground.com/practice/drag-drop")
    await page.locator("//article[@data-card-id='board-card-1']").hover()
    await page.mouse.down()
    await page.locator("//div[@data-column-id='in-progress']").hover()
    await page.mouse.up()
    let src=page.locator("//article[@data-card-id='board-card-4']")
    let trgt=page.locator(" (//div[@data-column-id='done'])[2]")
    await src.dragTo(trgt)
})
test.only('Practice file upload',async({page})=>{
    await page.goto("https://qaplayground.com/practice/file-upload")
    await page.locator("#fu-single-input").setInputFiles("C:/Users/bhara/Desktop/Interview questions.txt")
    await page.waitForTimeout(1000);
    //await page.locator("#fu-single-input").setInputFiles("C:/Users/bhara/Desktop/E-Health Card.pdf");
    // await page
    // .locator("#fu-single-input")
    // .setInputFiles(path.join(__dirname,"../../Upload/Interview questions.txt"));
    await page.locator("#fu-multi-input").scrollIntoViewIfNeeded()
    await page.locator("#fu-multi-input").setInputFiles([
        path.join(__dirname,"../../Upload/Interview questions.txt"),
        path.join(__dirname,"../../Upload/sample.txt")
    ])
    await page.locator("//input[@data-testid='fu-drop-input']").scrollIntoViewIfNeeded()
    await page.locator("//input[@data-testid='fu-drop-input']").setInputFiles("C:/Users/bhara/Desktop/E-Health Card.pdf")
    //Upload img files only
    await page.locator("#fu-type-input").scrollIntoViewIfNeeded()
    await page.locator("#fu-type-input").setInputFiles("C:/Users/bhara/Desktop/E-Health Card.pdf")
    await expect(page.locator("//div[@data-testid='fu-type-error']")).toBeVisible()
    await page.locator("#fu-type-input").setInputFiles("C:/Users/bhara/Desktop/Bus2.jpeg")
})