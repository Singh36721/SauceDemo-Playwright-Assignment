import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  // Locators inside cart page
  readonly addBackpack: Locator;
  readonly addBikeLight: Locator;
  readonly cartItems: Locator;
  readonly cartBadge: Locator;   // The icon showing cart count
  readonly cartLink: Locator;   // Cart navigation lin
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    this.addBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');    
    this.cartItems = page.locator('.cart_item');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink  = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  // To count items in the cart
  async getCartCount() {
    return await this.cartItems.count();
  }
}