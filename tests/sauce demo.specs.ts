import {test} from '@playwright/test'
//playwright locators 

//getByRole()
//getByText()
//getByTitle()
//getByPlaceholder()
//getByLabel()
//getByTestId()

// await page.locator
// await page.getByRole()
// role = what type of element it is 

test('verify login page', async ({page})=>{
    await page.goto('https://www.saucedemo.com/')
  await page.locator('.form_input').first().fill('standard_user')
    await page.locator('.form_input').nth(1).fill('secret_sauce')
    //get by role
    await page.getByRole('button', {name: 'Login'}).first().click()
    await page.getByRole('textbox', {name:'Username'}).click()

    //.first()
    // const button = page.getByRole('button', {name: 'Login'})
    // await button.first().click()
    // //get by Text()
    // await page.getByText('Sauce Labs Backpack').click()
    // //getByLabel()
    // await page.getByLabel('Username').fill('hdfvjhhjvb')
    // //getByPlaceholder
    // await page.getByPlaceholder('Username').fill('sghebh')
    // //getByAltText()
    // await page.getByAltText('Sauce Labs Backpack').click()
    // //getByTitle()
    // await page.getByTitle('Add to cart').click()
    //elements //roles
    // <button> button 
    // <a> link
    // checkbox checkbox
    // <input> textbox

    await page.locator('.form_input').first().fill('standard_user')
    await page.locator('.form_input').nth(1).fill('secret_sauce')
    page.locator('[class*="oxd-input"]').first()
    // *= means contains
    page.locator('[class^="oxd-input"]')
    // ^ = starts with
    page.locator('[class$="active"]')
    // $ = ends wiith

    page.locator('.oxd-input').first()
    page.locator('[class*="oxd-input"]').first()
    page.getByPlaceholder('Password')



})