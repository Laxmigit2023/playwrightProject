import test, { expect } from '@playwright/test'

test('verify saucedemo loginpage', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[name="user-name"]').fill('locked_out_user');
    await page.locator('[type="password"]').fill('secret_sauce');
    await page.locator('input[name="login-button"]').click;
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
// assertion syntax
// await expect(locator).toBeVisible(); 
// different types of assertions
// 1. locator assertion--verify the elements
// await expect(locator).toBeHidden();
// await expect(locator).toBeEnabled();
await expect(page.locator('input[name="login-button"]')).toBeVisible;

//2.page Assertions
//await expect(page).toHaveURL('www..');
//await expect(page).toHaveTitle('saglab');
await expect(page).toHaveTitle('Swag Labs');

//  const button = page.locator('[data-test="login-button"]')
//     await expect(button).toBeVisible()

//3.Generic Assertions
//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     //await expect(page).toHaveTitle('Swag Labs')  
     //3.generic assertion
        //await expect(actual).toBe(expected) //equal assertion
        //await expect('Products').not.toBe('Product')  //negation assertion
        //await expect('Products').toContain('Prod')  //contain assertion
        //await expect('Products').not.toContain('Prod')  //negation contain assertion
        //await expect(actual).toBeTruthy()  //truthy assertion
        //await expect(actual).toBeFalsy()  //falsy assertion




});