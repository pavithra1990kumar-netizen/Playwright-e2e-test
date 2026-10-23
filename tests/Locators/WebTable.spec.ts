import {test} from '@playwright/test'
test('Practice static web table',async({page})=>{
    await page.goto("https://qaplayground.com/practice/data-table");
    await page.getByTestId('pagination-page-3').click();
    await page.locator('')
})