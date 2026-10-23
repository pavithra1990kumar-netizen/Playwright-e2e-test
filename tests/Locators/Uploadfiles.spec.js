
//Upload a single file from the project 
import{test} from '@playwright/test'
import { log } from 'console';
import path from "path";
test('Upload a file inside the project',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
    await page.locator('#singleFileInput').setInputFiles("C:/Users/bhara/Desktop/Playwright/tests/Locators/Upload/Interview questions.txt");
    await page.getByRole('button',{name:'Upload Single File'})
    await page.waitForTimeout(3000);
})

//Upload multiple files from the project
test('upload multiple files',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded();
    await page.locator('#multipleFilesInput').setInputFiles(['C:/Users/bhara/Desktop/Playwright/tests/Locators/Upload/sample.txt','C:/Users/bhara/Desktop/Playwright/tests/Locators/Upload/Interview questions.txt']);
    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
    await page.waitForTimeout(2000);
})

//Upload a single file from the project directory 
//console.log(__dirname);
test('upload single file from the project directory',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
    console.log(__dirname);
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../../Upload/Interview questions.txt"));
    await page.getByRole('button',{name:'Upload Single File'}).click();
})

//Upload a multiple files from the project directory
test.only('upload multiple files from the project directory',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded();
    await page.locator('#multipleFilesInput').setInputFiles([
        path.join(__dirname,"../../Upload/sample.txt"),
        path.join(__dirname,"../../Upload/Interview questions.txt")
    ]);
    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
    await page.waitForTimeout(2000);
})

//Upload a single file from ur local machine
test('Upload a file from a laptop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
    await page.locator('#singleFileInput').setInputFiles("C:/Users/bhara/Desktop/E-Health Card.pdf");
    await page.getByRole('button',{name:'Upload Single File'}).click();
});

//Upload a multiple files from ur local machine
test('Upload a multiple files from a laptop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded();
    await page.locator('#multipleFilesInput').setInputFiles([
        "C:/Users/bhara/Desktop/E-Health Card.pdf",
        "C:/Users/bhara/Desktop/Typescript Notes/Datatypes in TypeScript.pdf"
    ]);
    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
});

//Remove the uploaded file
test('Remove a multiple files from a laptop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded();
    await page.locator('#multipleFilesInput').setInputFiles([
        "C:/Users/bhara/Desktop/E-Health Card.pdf",
        "C:/Users/bhara/Desktop/Typescript Notes/Datatypes in TypeScript.pdf"
    ]);
    await page.locator('#multipleFilesInput').setInputFiles([]);
    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
});
