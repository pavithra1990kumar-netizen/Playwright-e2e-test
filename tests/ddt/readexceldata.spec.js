import {test} from '@playwright/test'
import excel from 'exceljs'
import path from 'path'

//Read single value
test('Read single data',async ({page}) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../TestData/Testdata.xlsx"));
    let sheet=await book.getWorksheet("Sheet1")
    //let data= await sheet.getRow(1).getCell(1).toString()
    let data= await sheet.getRow(1).getCell(1).value;
    console.log(data);
})
//Read multiple values
test('Read multiple values from the shett2',async ({page}) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../TestData/Testdata.xlsx"));
    let sheet=await book.getWorksheet("Sheet2");
    for(let row=1;row<=sheet.actualRowCount;row++){
        for(let c=1;c<=sheet.actualColumnCount;c++){
            let data=sheet.getRow(row).getCell(c).toString()
            console.log(data);
        }
    }
})

