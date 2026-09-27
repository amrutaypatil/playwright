---

layout: default
title: QA Interview Vault
-------------------------

# QA Interview Vault

**Real Software Testing & SDET Interview Questions**

A personal knowledge base for interview preparation.

---

## 🎭 Playwright

UI automation, framework architecture, Page Object Model, locators, waits, fixtures, multi-tabs, frames, debugging and Playwright framework design.

[Open Playwright Questions](playwright.md)

---

## 🔌 API Testing

Postman, REST APIs, HTTP methods, authentication, scripting and Playwright API automation.

[Open API Testing Questions](api-testing.md)

---

## 🗄️ SQL

Joins, aggregations, subqueries, indexing and intermediate SQL interview scenarios.

[Open SQL Questions](sql.md)

---

## ⚙️ CI/CD

GitHub Actions, Jenkins, parallel execution, pipelines, reports and automation execution.

[Open CI/CD Questions](ci-cd.md)

---

## 🧪 Functional / Manual Testing

Test scenarios, test-case design, boundary value analysis, equivalence partitioning, defects, regression testing and Agile.

[Open Functional Testing Questions](functional-testing.md)

---

## How to Use This Vault

### Before an interview

Read the question first.

Try to answer it yourself.

Then open the answer.

---

### After an interview

Add the new question to the appropriate `.md` file.

Example:

<details>
<summary>How do you handle a new tab in Playwright?</summary>

### Answer

I wait for the new page event before performing the action that opens the new tab.

```javascript
const newPagePromise = context.waitForEvent('page');

await page.getByRole('link', {
    name: 'Open Report'
}).click();

const newPage = await newPagePromise;

await newPage.waitForLoadState();
```

</details>

---

## Interview Rule

> **Question first. Answer second.**

This repository is intentionally Markdown-first.

No database.

No CMS.

No JavaScript data file.

No complex application code.

Just questions, answers and interview preparation.
