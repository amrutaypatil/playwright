---

layout: default
title: Playwright Interview Questions
-------------------------------------

# Playwright Interview Questions

Real-world Playwright and SDET interview questions.

---

## Framework Architecture

<details>
<summary>1. How would you explain a Playwright framework using JavaScript in an interview?</summary>

### Answer

I have worked with Playwright using JavaScript and follow a maintainable framework structure, mainly using the Page Object Model.

I keep the test cases separate from page-specific locators and actions.

I use Page Object classes for each application page, a configuration file for common settings, test-data files for input data and utility/helper files for reusable functions.

Playwright handles browser, browser context and page creation. I also use fixtures for common setup and reusable test dependencies.

A typical framework structure can look like this:

```text
tests/
├── login.spec.js
├── checkout.spec.js

pages/
├── LoginPage.js
├── CheckoutPage.js

fixtures/
├── testFixture.js

utils/
├── helpers.js
├── testData.js

playwright.config.js
```

I use Playwright features such as:

* Built-in locators
* Auto-waiting
* Assertions
* Screenshots
* Traces
* HTML reports
* Multiple browser projects
* Parallel execution

The `playwright.config.js` file manages common settings such as:

* Browser projects
* Base URL
* Timeouts
* Retries
* Workers
* Screenshots
* Traces
* Reporters

I can execute the tests across Chromium, Firefox and WebKit.

In CI/CD, the pipeline can trigger the tests and store reports and test artifacts for debugging failures.

The main objective is to keep the framework maintainable, reusable and easy to understand.

</details>

---

## Page Object Model

<details>
<summary>2. Why do you use Page Object Model in Playwright?</summary>

### Answer

Page Object Model separates test logic from page-specific implementation.

I keep locators and page actions inside page classes while the test files focus on business scenarios.

For example:

```javascript
class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');

        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
```

The test can then focus on the actual scenario.

Benefits include:

* Maintainability
* Reusability
* Separation of concerns
* Easier locator maintenance
* Cleaner test cases

</details>

---

## Browser, Context and Page

<details>
<summary>3. What is the difference between Browser, BrowserContext and Page?</summary>

### Answer

### Browser

The Browser represents the browser instance.

### BrowserContext

A BrowserContext represents an isolated browser session.

It can have its own:

* Cookies
* Local storage
* Session storage
* Permissions

### Page

A Page represents an individual browser tab or page inside a browser context.

The relationship can be represented as:

```text
Browser
   |
   +-- BrowserContext
          |
          +-- Page
          |
          +-- Page
```

Browser contexts are useful for test isolation.

</details>

---

## Locators

<details>
<summary>4. Which locator strategies do you prefer in Playwright?</summary>

### Answer

I prefer locators based on user-facing behaviour and accessibility.

Common locators include:

```javascript
page.getByRole()
page.getByLabel()
page.getByText()
page.getByPlaceholder()
page.getByTestId()
```

For example:

```javascript
await page.getByRole('button', {
    name: 'Submit'
}).click();
```

I generally avoid brittle selectors such as deeply nested CSS selectors unless there is a specific reason to use them.

</details>

---

## Auto-Waiting

<details>
<summary>5. What is auto-waiting in Playwright?</summary>

### Answer

Playwright automatically waits for required actionability conditions before performing supported actions.

For example:

```javascript
await page.getByRole('button', {
    name: 'Submit'
}).click();
```

Instead of using fixed waits such as:

```javascript
await page.waitForTimeout(5000);
```

I prefer Playwright's built-in waiting mechanisms.

Fixed waits can unnecessarily slow down the test and can still be unreliable.

</details>

---

## Multiple Tabs

<details>
<summary>6. How do you handle a new tab in Playwright?</summary>

### Answer

I wait for the `page` event before performing the action that opens the new tab.

```javascript
const newPagePromise = context.waitForEvent('page');

await page.getByRole('link', {
    name: 'Open Report'
}).click();

const newPage = await newPagePromise;

await newPage.waitForLoadState();

console.log(await newPage.title());
```

This prevents the test from trying to access the new page before it has been created.

</details>

---

## Multiple Pages

<details>
<summary>7. How do you handle multiple pages in Playwright?</summary>

### Answer

I can get the pages available in the current browser context.

```javascript
const pages = context.pages();

for (const currentPage of pages) {
    console.log(await currentPage.title());
}
```

When a new page is expected because of a specific user action, I prefer waiting for the `page` event.

</details>

---

## Fixtures

<details>
<summary>8. What are Playwright fixtures?</summary>

### Answer

Fixtures provide reusable setup and test dependencies.

They can be used for:

* Authentication
* Test data
* Page objects
* Common setup
* Reusable dependencies

Fixtures help reduce duplicated setup code and make the framework easier to maintain.

</details>

---

## Assertions

<details>
<summary>9. What assertions do you commonly use in Playwright?</summary>

### Answer

I commonly use Playwright's built-in `expect` assertions.

For example:

```javascript
await expect(page.getByRole('heading', {
    name: 'Dashboard'
})).toBeVisible();
```

Other examples include:

```javascript
await expect(locator).toHaveText('Success');

await expect(locator).toHaveValue('John');

await expect(page).toHaveTitle('Dashboard');
```

The assertions also work with Playwright's waiting behaviour, which helps avoid unnecessary manual waits.

</details>

---

## Debugging

<details>
<summary>10. How do you debug a failed Playwright test?</summary>

### Answer

I normally check:

1. Failure message
2. Locator involved
3. Screenshot
4. Trace
5. HTML report
6. Test data
7. Environment
8. Console information
9. Network information where relevant

Then I determine whether the failure is caused by:

* Application behaviour
* Locator
* Synchronization
* Test data
* Environment
* Framework implementation

The trace and screenshot are particularly useful for understanding what happened during the test.

</details>

---

## Cross-Browser Testing

<details>
<summary>11. How do you execute Playwright tests across different browsers?</summary>

### Answer

Playwright supports browser projects.

For example:

```javascript
projects: [
    {
        name: 'chromium',
        use: { browserName: 'chromium' }
    },
    {
        name: 'firefox',
        use: { browserName: 'firefox' }
    },
    {
        name: 'webkit',
        use: { browserName: 'webkit' }
    }
]
```

This allows the same test suite to be executed against different browser engines.

</details>

---

## Parallel Execution

<details>
<summary>12. How do you run Playwright tests in parallel?</summary>

### Answer

Playwright supports parallel test execution through workers.

For example:

```javascript
export default {
    workers: 4
};
```

Tests can also be distributed across CI jobs or machines depending on the CI/CD setup.

The important consideration is that tests should be independent enough to run safely in parallel.

</details>

---

## New Questions

After an interview, add the question here or under the appropriate section.

<details>
<summary>13. How do you handle downloads in Playwright?</summary>

### Answer

Playwright provides the `download` event.

```javascript
const downloadPromise = page.waitForEvent('download');

await page.getByRole('button', {
    name: 'Download'
}).click();

const download = await downloadPromise;

await download.saveAs('downloads/report.pdf');
```

I wait for the download event before performing the action that triggers the download.

</details>
