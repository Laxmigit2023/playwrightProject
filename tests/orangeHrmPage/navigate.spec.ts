import {test,expect} from "@playwright/test";

test ('Verify Login',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox',{name:'Username'}).fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await expect(page.locator('[type="submit"]')).toBeVisible;
    await page.locator('[type="submit"]').click;
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.goBack();
    await page.goForward();
    await page.reload();


   



});