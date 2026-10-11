import {Page, Locator} from '@playwright/test'
export class InventoryPage {
    page: Page
    addToCartButton: Locator
    shoppingCartLink: Locator 
    
    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]')
    }   
    async clickAddToCart() {
        await this.addToCartButton.click()
    }   
    async clickShoppingCart() {
        await this.shoppingCartLink.click()
    }   
}