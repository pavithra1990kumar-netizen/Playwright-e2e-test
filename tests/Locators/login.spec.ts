
import {test, expect} from '@playwright/test';
test('Veify IRCTC login page',async({page})=>{
await page.goto("https://www.irctc.co.in/nget/train-search");
//await page.locator('ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top ng-tns-c25-2 ng-star-inserted').click();
await page.locator('div').filter({ hasText: 'आईआरसीटीसी में आपका स्वागत है' }).nth(3).click();
await page.getByText('English').click();
await page.locator('a').first().click();
await page.getByRole('button', { name: '-Sep-2026 [19:41:21]' }).click();
//await page.locator('fa fa-align-justify').click();
//await page.getByRole('button',{name:'LOGIN / REGISTER'}).click();
});