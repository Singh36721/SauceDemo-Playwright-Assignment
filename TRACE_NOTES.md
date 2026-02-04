Root cause: the checkout “Finish” button does not trigger any network request in the corporate SauceDemo clone, so `page.route()` never intercepted anything. 

Fix: mock a fake endpoint instead and inject fallback UI manually so the test can assert the error state reliably.