import {test} from '@playwright/test'
import excel, { Workbook } from 'exceljs'
import path from 'path'
test('Pass the data from excel to appln',async ({page}) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../TestData/Testdata.xlsx"));
    let sheet=book.getWorksheet("FileUploadData");
    let alldata=[]
    for(let row=2;row<=sheet.actualRowCount;row++){
        //within single row how many columns
        let r=sheet.getRow(row);
        let url=r.getCell(1).toString()
        let name=r.getCell(2).toString()
        let email=r.getCell(3).toString()
        let phone=r.getCell(4).toString()
        let address=r.getCell(5).toString()
        alldata.push({url:url,name:name,email:email,phone:phone,address:address})
    }
    console.log(alldata);
    for(let d of alldata){
        await page.goto(d.url);
        await page.waitForTimeout(2000)
        await page.locator('#name').fill(d.name)
        await page.locator('#email').fill(d.email)
        await page.locator('#phone').fill(d.phone)
        await page.locator('#textarea').fill(d.address)
        await page.locator('#female').click();
        await page.locator('#friday').check();
        await page.locator('#country').selectOption({index:2})
    }
})