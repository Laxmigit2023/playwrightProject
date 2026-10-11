import { Page,Locator } from '@playwright/test'

export class LoginPage {
    //locators
    page: Page  // to represent browser page
    username: Locator
    password: Locator
    loginButton: Locator
    constructor(page: Page) {
        this.page = page
        this.username = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
    }
    //constructor runs automatically when the object is created
    //page: page receives the page object from the test file
    // methods for actions on the page
    async navToLoginPage() {
        await this.page.goto('/')
    }
    // async enterUsername(username: string) {
    //     await this.username.fill(username)
    // }
    // async enterPassword(password: string) {
    //     await this.password.fill(password)
    // }
    // async clickLoginButton() {
    //     await this.loginButton.click()
    // }

   async loginwithCredentials(username:string,password:string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();

   }


};