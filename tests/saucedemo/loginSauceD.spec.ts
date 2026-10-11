import test,{expect} from '@playwright/test'
import { LoginPage } from '../../Pages/loginPage';
import { InventoryPage } from '../../Pages/inventoryPage';
import { POManager } from '../../utility/PoManager';

// import { test, expect } from '@playwright/test'
// import { LoginPage } from '../../pages/LoginPage'
//  import { InventoryPage } from '../../pages/InventoryPage'
// //import { SauceDemoPage } from '../../pages/SauceDemoPage'


test('verify login page', async ({ page }) => {
    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    const inventoryPage = poManager.getInventoryPage()
  //  await loginPage.navToLoginPage()
  //  await loginPage.login('standard_user', 'secret_sauce')
    // const sauceDemoPage = new SauceDemoPage(page)
    // await sauceDemoPage.loginPage.navToLoginPage()
    // await sauceDemoPage.loginPage.login('standard_user', 'secret_sauce')
    // await sauceDemoPage.inventoryPage.clickAddToCart()

    //create object of the page class
    // const loginPage = new LoginPage(page)
    // loginPage is the variable name
    // new LoginPage(page) is the object of the class LoginPage







// test('verify saucedemo loginpage',async({page})=>{
// //create object for this class
// const loginPage=new LoginPage(page);
// const inventoryPage=new InventoryPage(page);

// await loginPage.navToLoginPage();
// await loginPage.loginwithCredentials('standard_user','secret_sauce');








//     await page.goto("https://www.saucedemo.com/")
//    // await page. getByRole('textbox',{name:'user-name'}).fill('standard_user');
// //    await page.locator('#user-name').fill('standard_user');
// //     await page .locator('[placeholder="Password"]').fill('secret_sauce');
// //     await page.locator('#login-button').click;

// // await page.locator('[name="user-name"]').fill('locked_out_user');
// // await page.getByPlaceholder('Password').fill('secret_sauce');
// // await page.getByRole('button',{name:"login-button"}).click;
// //await page.getByText('')
// //await page.getByLabel('')
// //await page.getBytitle()
// //await page.getByAltText()

// //await page.locator('.input_error form_input error').fill('locked_out_user');
// await page.locator('[name="user-name"]').fill('locked_out_user');
// await page.locator('[type="password"]').fill('secret_sauce');
// await page.locator('input[name="login-button"]').click;





});
