# DESIGN.md

This document describes the design decisions, structure, and strategies used in the Playwright automation suite for SauceDemo. It focuses on locator choices, waiting strategy, framework design, parallelism, and the network‑mock approach, as required by the assignment.

---

## 1. Locator Strategy

### Preferred: `data-test` attributes
SauceDemo provides stable `data-test` selectors, which are ideal for automation.  
Examples:
```ts
page.getByTestId('username');
page.getByTestId('login-button');
page.getByTestId('title');
page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

Avoided:

XPath (//div/...)
Deep CSS chains (div > span > button)
Text-only selectors unless absolutely necessary

Result:
All POMs define locators inside the constructor, keeping a clean structure, and tests remain readable.

2. Page Object Model (POM)
The framework contains four Page Object classes:
LoginPage

Handles navigation (goto('/'))
Manages credential entry
Exposes login button & error message

ProductsPage

Products header
Add-to-cart buttons (Backpack, Bike Light)
Cart badge
Inventory list container

#CartPage
Cart items list
Checkout button
Cart badge & link

#CheckoutPage
Checkout Form (First Name, Last Name, Postal Code)
Continue & Finish buttons
Order completion header

#Why POM?
Reduces duplication
Isolates UI element knowledge
Makes tests readable
Supports parallel execution safely

#Playwright already waits for:
Visibility
Stability
DOM attachment
Clickability
await expect(locator).toBeVisible();
await locator.click();
await locator.fill();

#Only during debugging (Task F overlay visibility) did I temporarily use:
page.waitForTimeout(2000);

#Configured in playwright.config.ts:
workers: 2

#Configured globally:
trace: 'on-first-retry',
screenshot: 'only-on-failure',
video: 'retain-on-failure'

##Next Step  
Create the file:
###**SauceDemoProject-Playwright*
Save → Commit → Push



