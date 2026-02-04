import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productsHeader: Locator;
 
  constructor(page: Page) {
    this.page = page;

    // Title at the top: <span data-test="title">Products</span>
    this.productsHeader = page.locator('[data-test="title"]');
  }

}