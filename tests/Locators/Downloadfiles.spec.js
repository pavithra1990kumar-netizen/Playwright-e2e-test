import {test} from '@playwright/test'
import path from "path";
import fs from "fs";
test('download file',async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    //await page.getByRole('textbox',{name:"textarea"}).fill("Welcome to download");
    await page.locator('#writeArea').fill("Welcome download");
    let [downloadfile]=await Promise.all([
     page.waitForEvent('download'),
     page.getByRole('button',{name:'Download'}).click()
    ])
    let folder="C:/Users/bhara/Desktop/Playwright/Download"
    let filename=downloadfile.suggestedFilename();
    await downloadfile.saveAs(path.join(folder,filename));
    //download the file in a temporary folder
    //console.log(await a.path());
    await page.waitForTimeout(2000);
})
//Download and save the file in dir path
test('Download and save the file using dir',async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.locator('#writeArea').fill('Hi Morning');
    await page.locator('#fileName').fill('newfile.txt');
    let [downloadfile]=await Promise.all([
     page.waitForEvent('download'),
     page.getByRole('button',{name:'Download'}).click()
    ])
    let folder="C:/Users/bhara/Desktop/Playwright/Download"
    let file=downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(__dirname,"../../Download",file));
})
//Download the file to my system-inside the created folder
test.only('Download the file to my system',async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.locator('#writeArea').fill("IT'S TIME")
    let [downloadfile]=await Promise.all([
     page.waitForEvent('download'),
     page.locator('#downloadButton').click()
  ])  
  let folder="C:/Users/bhara/Desktop/Delete"
  let filename=downloadfile.suggestedFilename();
  //await downloadfile.saveAs(path.join(folder,filename));
  let fpath=path.join(folder,filename);
  await downloadfile.saveAs(path.join(__dirname,"../../Download",filename));

  //Verify if the file is downloaded on the given path
  if(fs.existsSync(fpath)){
    console.log(`File exists in the path: ${fpath}`);
  }else{
    console.log('No file exists');
  }
})