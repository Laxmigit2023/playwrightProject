import {test,expect} from "@playwright/test";

test ('radioButtonCheckBoxes',async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   page.on('dialog', async dialog =>{
        console.log('Dialog message', dialog.message())
        await dialog.accept();
        //await dialog.dismiss();
    })
    await page.locator('[name="enter-name"]').fill('raj')
    await page.locator('input[value="Alert"]').click()
})



    
    
    