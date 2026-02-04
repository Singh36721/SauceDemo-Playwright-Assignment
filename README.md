# SauceDemo UI Automation – Playwright (TypeScript)

End‑to‑end UI automation suite for **https://www.saucedemo.com** using **Playwright & TypeScript** 
Covers:
 login (success/failure)
 add‑to‑cart
 checkout happy path
 locked‑out user
 network error handling scenario via route mocking.

-----------------------------------------------------------------------------------------------------

## Tech Stack

- **Playwright Test** (TypeScript)
- Page Object Model (POM)
- Parallel execution, tracing, screenshots on failure
- Mocks via `page.route`

----------------------------------------------------------------------------------------------------

## Project Structure
SauceDemoProject-Playwright/
├─ pages/
│  ├─ LoginPage.ts
│  ├─ ProductsPage.ts
│  ├─ CartPage.ts
│  └─ CheckoutPage.ts
├─ tests/
│  ├─ login-success.spec.ts
│  ├─ login-failed.spec.ts
│  ├─ lockedOutUser.spec.ts
│  ├─ addToCart.spec.ts
│  ├─ checkoutFlow.spec.ts
│  └─ networkErrorCheckout.spec.ts
├─ playwright.config.ts
├─ package.json
└─ README.md

---------------------------------------------------------------------------------------------------

##  Setup

> **Prerequisite**: 
Install VS Code
Node.js (LTS recommended). 
 
> This project was created with `npm init playwright@latest`.

Install dependencies:

```bash
npm ci