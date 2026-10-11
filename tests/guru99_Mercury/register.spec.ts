import {test,expect} from "@playwright/test";
test ('Verify Login',async ({page})=>{
await page.goto('https://demo.guru99.com/test/newtours/register.php');
await page.locator('[name="username"]').fill('lak');
await page.locator('[name="password"]').fill('lak@123');
await page.locator('[name="repeatedPassword"]').fill('lak');
await page.locator('[type="text"]').fill('laxmi');
await page.locator('[]')





});