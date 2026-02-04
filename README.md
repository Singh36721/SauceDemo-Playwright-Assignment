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
-Then check the versions in cmd
-(node -v, npm -v, npx -v).

Create a directory by going to the path first-
1.cd %USERPROFILE%\Document
2.mkdir SauceDemoProject-Playwright
3.cd SauceDemoProject-Playwright
4.npm init -y
 
> This project was created with `npm init playwright@latest`.
5.npm init playwright@latest
6.Proceed with Y
7.Select the Language - TypeScript
8.True

-------------------------------------------------------------------------------------------------
Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --headed
    Runs the tests in headed mode.  

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

 To open last HTML report run:
  npx playwright show-report   

----------------------------------------------------------------------------------------------------
Open the VSCode via - code.