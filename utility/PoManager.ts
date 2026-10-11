// Po manages the page objects and provides a single point of access to them
import { Page } from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'
import { InventoryPage } from '../Pages/inventoryPage'


export class POManager {
    page: Page
    loginPage: LoginPage
    inventoryPage: InventoryPage    
    constructor(page: Page) {
        this.page = page
        // declare the page objects and initialize them
        this.loginPage = new LoginPage(page)
        this.inventoryPage = new InventoryPage(page)
    }
    //this method returns the login page object
    getLoginPage() {
        return this.loginPage
    }       
    getInventoryPage() {
        return this.inventoryPage
    }
    //pom - design pattern for organizing the code and reusing the code
    //poManager - page object manager - manages the page objects and provides a single point of access to them
}