import test,{expect} from "@playwright/test";

test ('Verify Login',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.hover(locator)
    //await locator.press("Enter");
    //await locator.clear;
    //await locator.selectOption(value);
    //await locator.setInputFiles('path');
    //await locator.dragTo(locator);
    //await page.locator.scroolIntoViewIfNeeded();
    //await page.goback();
    //await page.reload();
    //await page.waitForTimeout(5000);
    //await page.goForward();

    //Browser--context--page---website

    // Browser --- Context --- Page --website
//browser - chromium, firefox, webkit
//context - incognito window
//page - tab
// test('Browser Context Test', async ({})=>{
//     //launch browser
//     const browser = await chromium.launch({
//         headless: false
//     })  
//     //create new incognito context
//     const context = await browser.newContext()
//     //create new page in the context
//     const page = await context.newPage()
//     const page2 = await context.newPage()

//screenshots
//full page screenshot
    // await page.screenshot({path:'screenshot/fullPage.png'})
    // await page.screenshot({path:'screenshot/loginPage2.png', fullPage:true})
    // //locator screenshot
    //  await button.screenshot({path:'screenshot/login-button.png'})







});