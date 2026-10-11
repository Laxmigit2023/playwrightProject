import {test,expect} from "@playwright/test";

test ('radioButtonCheckBoxes',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('input[value="radio1"]').check();
    expect(await page.locator('input[value="radio1"]').isChecked()).toBeTruthy();
    await page.locator('#dropdown-class-example').selectOption('Option1');
    await page.locator('#checkBoxOption1').check();
    expect(await page.locator('#checkBoxOption1').isChecked()).toBeTruthy();

})

test.only('dropdown',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.locator('input.ui-autocomplete-input').pressSequentially('ind')
const dropdown = await page.locator('ul.ui-autocomplete')
await dropdown.waitFor({state:'visible'})
const count = await page.locator('.ui-menu-item').count()
console.log(count)
for(let i =0; i<count; i++){
    const text = await dropdown.locator('.ui-menu-item').nth(i).textContent();
    if(text==='India'){
        await dropdown.locator('.ui-menu-item').nth(i).click()
        break;
    }
}
//await page.getByRole('listitem').filter({hasText:'India'}).click()
await page.pause()

})
test.only('dropdownnew',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await page.locator('[href*="/pim/viewPimModule"]').click()
    await page.waitForLoadState()
    await page.locator('.oxd-select-text').nth(0).click()
    await page.waitForSelector('[role="listbox"]')

    const itemsList = await page.locator('[role="listbox"] [role="option"]')
    const names = await itemsList.allTextContents()
    console.log(names)
})
test.only('multiple window handling', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const docLink =  page.locator('[href*="/qa-career-accelerator-job-ready"]')
    
    //expect(page).toHaveURL('https://rahulshettyacademy.com/qa-career-accelerator-job-ready')
    //promise
    // 3 state : 1. pending , 2.rejected., 3. fullfiled
   const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        docLink.click()
    ])
    await newPage.waitForLoadState()
    expect(newPage).toHaveURL('https://rahulshettyacademy.com/qa-career-accelerator-job-ready')
    await page.bringToFront();
    await page.pause()
    // await Promise.all([
//      context.waitForEvent('page'),
//     docLink.click()
// ])
// const pages = context.pages();
// console.log(pages)
// await pages[0].bringToFront()
   
})
