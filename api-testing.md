---

layout: default
title: API Testing Interview Questions
--------------------------------------

# API Testing Interview Questions

Postman, REST APIs, HTTP methods, authentication, scripting and Playwright API automation.

---

## API Fundamentals

<details>
<summary>1. What is API testing?</summary>

### Answer

API testing validates the behaviour of an application's APIs directly without depending on the UI.

Typical validations include:

* HTTP status code
* Response body
* Response headers
* Response schema
* Response time
* Authentication
* Business rules
* Error handling

A basic API validation flow is:

```text
Request
   ↓
API
   ↓
Response
   ↓
Status + Headers + Body + Business Validation
```

</details>

---

<details>
<summary>2. What are common HTTP methods?</summary>

### Answer

| Method | Typical purpose              |
| ------ | ---------------------------- |
| GET    | Retrieve data                |
| POST   | Create data                  |
| PUT    | Replace or update a resource |
| PATCH  | Partially update a resource  |
| DELETE | Delete a resource            |

Example:

```http
GET /users/10
POST /users
PUT /users/10
PATCH /users/10
DELETE /users/10
```

</details>

---

<details>
<summary>3. What HTTP status codes do you commonly validate?</summary>

### Answer

Common examples include:

```text
200 → Successful request
201 → Resource created
204 → Successful request with no response body
400 → Bad request
401 → Authentication required or failed
403 → Forbidden
404 → Resource not found
409 → Conflict
500 → Server error
```

The expected status code depends on the API contract.

</details>

---

## Postman

<details>
<summary>4. How do you write an assertion in Postman?</summary>

### Answer

Postman supports JavaScript-based tests.

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

Response validation:

```javascript
const response = pm.response.json();

pm.expect(response.name).to.eql("John");
```

</details>

---

<details>
<summary>5. How do you pass data from one API request to another in Postman?</summary>

### Answer

I can extract a value from the response and store it in a variable.

```javascript
const response = pm.response.json();

pm.environment.set("userId", response.id);
```

The next request can use:

```text
{{userId}}
```

This allows API requests to be chained.

</details>

---

## Playwright API Testing

<details>
<summary>6. How can Playwright be used for API testing?</summary>

### Answer

Playwright provides `APIRequestContext` for API automation.

Example:

```javascript
import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {
    const response = await request.get('/users');

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toBeDefined();
});
```

This is useful when the same automation framework needs both UI and API coverage.

</details>

---

<details>
<summary>7. Why would you combine API and UI testing in the same Playwright framework?</summary>

### Answer

API calls can be useful for:

* Test-data creation
* Test-data cleanup
* Authentication
* Backend validation
* Faster setup

For example:

```text
API
 ↓
Create test user
 ↓
UI
 ↓
Login
 ↓
Validate application behaviour
```

This can reduce unnecessary UI setup.

</details>
