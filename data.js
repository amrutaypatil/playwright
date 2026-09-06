/*
 * ============================================================
 * PLAYWRIGHT QA INTERVIEW VAULT
 * General Knowledge Data
 * ============================================================
 *
 * This file contains study/reference content.
 *
 * Interview history is maintained separately in:
 *
 * data/interviews.js
 *
 * When you attend a new interview, you normally only edit:
 *
 * data/interviews.js
 * ============================================================
 */

const vaultData = {

    /*
     * ========================================================
     * PLAYWRIGHT
     * ========================================================
     */

    playwright: [

        {
            id: "browser-context-page",
            title: "Browser · Context · Page",
            description:
                "Understand the Playwright hierarchy and why BrowserContext provides isolated sessions.",
            category: "Playwright"
        },

        {
            id: "locators",
            title: "Locators",
            description:
                "getByRole, getByText, getByLabel, CSS, XPath and choosing reliable locator strategies.",
            category: "Locators"
        },

        {
            id: "authentication",
            title: "Authentication",
            description:
                "Tokens, login once, storageState and reusing authenticated sessions.",
            category: "Authentication"
        },

        {
            id: "fixtures",
            title: "Fixtures",
            description:
                "Built-in fixtures, custom fixtures and sharing setup between tests.",
            category: "Fixtures"
        },

        {
            id: "parallel-execution",
            title: "Parallel Execution",
            description:
                "Workers, fullyParallel, test isolation and multiple browser projects.",
            category: "Parallel Execution"
        },

        {
            id: "assertions",
            title: "Assertions",
            description:
                "Hard assertions, soft assertions and Playwright auto-retrying assertions.",
            category: "Assertions"
        },

        {
            id: "pom",
            title: "Page Object Model",
            description:
                "Page Object Model design and reusable page interaction methods.",
            category: "POM"
        },

        {
            id: "mocking-shadow-dom",
            title: "Mocking & Shadow DOM",
            description:
                "When to mock APIs and how Playwright handles elements inside Shadow DOM.",
            category: "Playwright"
        },

        {
            id: "debugging",
            title: "Debugging",
            description:
                "page.pause(), headed mode, traces and actionability checks.",
            category: "Debugging"
        },

        {
            id: "api-testing",
            title: "API Testing",
            description:
                "Using Playwright APIRequestContext to test API endpoints, authentication and responses.",
            category: "API Testing"
        },

        {
            id: "file-upload",
            title: "File Upload",
            description:
                "Uploading files using Playwright setInputFiles().",
            category: "Playwright"
        },

        {
            id: "hooks",
            title: "Hooks",
            description:
                "beforeEach, afterEach, beforeAll and afterAll hooks in Playwright.",
            category: "Hooks"
        },

        {
            id: "annotations",
            title: "Annotations",
            description:
                "skip, fail, fixme, slow and other Playwright test annotations.",
            category: "Playwright"
        },

        {
            id: "headless-headed",
            title: "Headless vs Headed",
            description:
                "Understand the difference between headless and headed browser execution.",
            category: "Playwright"
        },

        {
            id: "actionability",
            title: "Actionability Checks",
            description:
                "Understand visibility, stability, enabled state, receiving events and other checks.",
            category: "Playwright"
        },

        {
            id: "framework-javascript-interview",
            title: "How to explain a Playwright framework using JavaScript in an interview",
            description:
                "Interview-ready explanation of a maintainable Playwright framework using JavaScript, Page Object Model, fixtures, test data, utilities, configuration, cross-browser execution, parallel execution and CI/CD.",
            category: "Framework",

            answer: `I have worked with Playwright using JavaScript. I follow and maintainable framework structure, mainly using Page Object Model.

I keep the test cases separate from page-specific locators and actions. I use Page Object classes for each application page, a configuration file for common settings, test data files for input data, and utility/helper files for reusable functions.

Playwright handles browser, context and page creation, and I use fixtures when I need common setup or reusable test dependencies. I also use Playwright's built-in assertions, auto-waiting, screenshots, traces and HTML reports.

For execution, I can run tests in Chromium, Firefox and WebKit, and configure parallel execution. In CI/CD, the tests can be triggered through a pipeline, and the generated reports and test artifacts can be used for debugging failures.

The Playwright config file is used to manage browser projects, base URL, timeouts, retries, workers, screenshots, traces and reporters. I use Playwright's built-in locators, auto-waiting and assertions. I can execute tests across Chromium, Firefox and WebKit, and configure parallel execution.`,

            points: [
                "Test cases are separated from page-specific locators and actions.",
                "Page Object classes are used for application pages.",
                "Fixtures provide common setup and reusable test dependencies.",
                "Test data and utility/helper files are kept separate.",
                "Playwright config manages browsers, base URL, timeouts, retries, workers, screenshots, traces and reporters.",
                "Tests can run across Chromium, Firefox and WebKit with parallel execution and CI/CD integration."
            ],

            followUps: [
                "Why did you choose Page Object Model?",
                "How do you manage authentication in the framework?",
                "How do you manage test data?",
                "How do you execute tests in parallel in CI/CD?"
            ]
        },

        {
            id: "framework-folder-structure",
            title: "Playwright framework folder structure",
            description:
                "Interview-ready folder structure for a maintainable Playwright framework using JavaScript.",
            category: "Framework",

            answer: `Framework folder structure

1. Test
   - Login.js
   - search.js
2. page
   - login page.js
   - HomePage.js
   - checkout Page.js
3. Fixture
   - testFixture.js
4. utils
   - JSONFileReader.js
   - helper.js
5. TestData
   - testData.json
   - Exls
6. Playwright.config.js

What each folder does

- tests/ → Contains actual test cases.
- pages/ → Contains Page Object classes, locators and reusable page actions.
- fixtures/ → Common setup and reusable test objects.
- utils/ → Common helper functions.
- test-data/ → Test input data.
- playwright.config.js → Browser, timeout, base URL, retries, workers, reporter, etc.
- package.json → Project dependencies and npm scripts.`
        },

        {
            id: "browser-context-page-interview-answer",
            title: "Browser, Context, and Page in Playwright",
            description:
                "Interview-ready explanation of Browser, BrowserContext and Page.",
            category: "Playwright",

            answer: `In Playwright, Browser, Context, and Page are three important concepts.

Browser means the actual browser application, like Chrome, Edge, or Firefox. We launch the browser first.

Browser Context is like a separate browser session. Each context has its own cookies, cache, local storage, and login session. We can create multiple contexts inside one browser, and they are isolated from each other.

Page is like a browser tab. Inside a context, we create a page and use it to open a URL and interact with the application, such as clicking buttons, entering text, and validating elements.`,

            points: [
                "Browser represents the browser instance.",
                "BrowserContext provides an isolated browser session.",
                "Page represents a tab within a browser context.",
                "Multiple contexts can exist in one browser and remain isolated."
            ]
        },

        {
            id: "textcontent-getbytext-inputvalue-interview-answer",
            title: "Explain textContent(), getByText() and inputValue() in Playwright",
            description:
                "Interview-ready explanation of textContent(), getByText() and inputValue().",
            category: "Locators",

            answer: `1. textContent() is used to get the text present inside an element.
   - reads/gets the text from an element.

2. getByText() is a locator used to find an element on web page.
   - finds an element using its visible text.

3. inputValue() is used to get the current value inside an input field.
   - Gets the value from an input field.`,

            points: [
                "textContent() reads the text content of an element.",
                "getByText() locates an element using visible text.",
                "inputValue() gets the current value from an input field."
            ]
        },

        {
            id: "pom-design-pattern-interview-answer",
            title: "Which type design pattern you have used in framework?",
            description:
                "Interview-ready explanation of Page Object Model as a design pattern.",
            category: "POM",

            answer: `POM Stands for Page Object Model Design Pattern.
- POM is an Design Pattern not framework.
- POM Design Pattern we use to design the Object Repository.
- We create pages folder and within the pages folder class we achieve POM Design Pattern.
- in POM Design Pattern, we create seperate classs for each and every web pages.
- if we have 100 pages in web application then we create 100 pages classes in pages folder.
- in POM Pages classes,

  i) we locate objects in constructor.

  ii) we create associated method without entering test data,

  iii) we call this methods inside the tests cases folder.
- By using POM Design pattern
- we store all object repository in centralized locations.
- we can reuse pages classes associated methods
- We can seperate test cases and its logic
- We can create cleaness test cases
- We can create """"Scalability and maintainability""`
        },

        {
            id: "test-data-playwright-interview-answer",
            title: "Test Data in Playwright – Step-by-Step Explanation",
            description:
                "Interview-ready explanation of managing test data in Playwright automation testing.",
            category: "Test Data",

            answer: `In Playwright automation testing, test data means the information that we use while executing our test cases. For example, while testing a login page, we may need a username, password, email, or other details. Instead of writing this data directly inside every test case, we can store it separately in a file. This makes our automation framework easy to maintain and update.

We can store test data in different formats, such as:

- JSON
- CSV
- Excel
- XML
- Database

Install and import the FS file:

Using fs to read the JSON file:

fs.readFileSync() reads the contents of the JSON file.

JSON.parse() converts the JSON text into a JavaScript object so that we can access the data.

EX:

export default class JsonReader   //class create

{

    static readJson(jsonFileName)             // method create

    {

        const file = path.join(__dirname, \`../testdata/json/\${jsonFileName}.json\`);

        const jsonRawData = fs.readFileSync(file);   //read file

        return JSON.parse(jsonRawData);                //convert JSON data to Java Script data

    }

}`,

            points: [
                "Keep test data separate from test logic.",
                "JSON, CSV, Excel, XML and databases can be used as test-data sources.",
                "fs.readFileSync() reads a file.",
                "JSON.parse() converts JSON text into a JavaScript object."
            ]
        },

        {
            id: "database-validation-playwright-interview-answer",
            title: "Database Connection and Data Validation in Playwright",
            description:
                "Interview-ready explanation of validating UI or API data against database records.",
            category: "Database",

            answer: `We need to check whether the data shown on the UI is correctly stored in the database. This is called database validation.

database validation means checking whether the data received from the application matches the data stored in the database. First, we establish a connection to MySQL. Then we execute an SQL query to find the required record. The returned database data is stored in rows.

EX:

The application displays the employee's first name as "John". We want to make sure that the same first name is actually stored in the database. Playwright can be used to get the value from the UI or API, while Node.js and a MySQL library can be used to connect to the database and retrieve the stored value.

Install : npm install mysql2

Import {mysql} form ‘mysql2/promise’;

Creating a database connection:

const connection = await mysql.createConnection({

host : 'localhost',

port : 3306,

user : 'root',

password : 'root',

database : 'tcsemployeeManagement'

});

Executing the SQL query

Const [row] = await connection.execute("select / update / insert/ delete / drop / truncate / alert / join / dense rank etc..");

capture first name column values:

const fname = rows[0].firstName;

expect(fname).toBe(fnameDb)`,

            points: [
                "Use Node.js with a database library such as mysql2 for the database connection.",
                "Query the required record and compare the database value with the value obtained from the UI or API.",
                "Database validation helps verify backend data integrity."
            ]
        },

        {
            id: "file-upload-interview-answer",
            title: "How do you upload a file in Playwright?",
            description:
                "Use setInputFiles() to upload a file through a file input.",
            category: "Playwright",

            answer: `we can upload a file using the setInputFiles() method. First, I locate the file input element using a locator. Then I provide the path of the file to setInputFiles()`
        }

    ],


    /*
     * ========================================================
     * JAVASCRIPT
     * ========================================================
     */

    javascript: [

        {
            id: "promises",
            title: "Promises",
            description:
                "A Promise represents the eventual completion or failure of an asynchronous operation.",
            category: "JavaScript"
        },

        {
            id: "async-await",
            title: "async / await",
            description:
                "async/await provides a cleaner syntax for working with Promise-based asynchronous operations.",
            category: "JavaScript"
        },

        {
            id: "event-loop",
            title: "Event Loop",
            description:
                "Understand synchronous code, microtasks such as Promise callbacks and macrotasks such as setTimeout.",
            category: "Event Loop"
        },

        {
            id: "oop",
            title: "OOP Concepts",
            description:
                "Encapsulation, inheritance, polymorphism and abstraction, with examples from automation frameworks.",
            category: "JavaScript / OOP"
        },

        {
            id: "closures",
            title: "Closures",
            description:
                "Understand how functions retain access to variables from their lexical scope.",
            category: "JavaScript"
        },

        {
            id: "scope",
            title: "Scope",
            description:
                "Understand global, function and block scope together with let, const and var.",
            category: "JavaScript"
        },

        {
            id: "array-methods",
            title: "Array Methods",
            description:
                "map, filter, reduce, find, some, every and other commonly asked JavaScript methods.",
            category: "JavaScript"
        },

        {
            id: "promises-playwright-interview-answer",
            title: "Where do you use Promises in Playwright?",
            description:
                "Interview-ready explanation of where JavaScript Promises are used in Playwright.",
            category: "JavaScript",

            answer: `A Promise is an object that represents the result of an operation give in the future.

Promises are very important in Playwright because many operations take some time. For example, opening a webpage, clicking a button, making an API request, reading a file, or getting data from a database may not finish immediate`
        },

        {
            id: "then-method-javascript-interview-answer",
            title: ".then() Method in JavaScript",
            description:
                "Interview-ready explanation of the Promise .then() method.",
            category: "JavaScript",

            answer: `The .then() method is used to handle the result of a Promise after the Promise is successfully completed.`
        }

    ],


    /*
     * ========================================================
     * CODING PROGRAMS
     * ========================================================
     */

    programs: [

        {
            id: "reverse-string",
            title: "Reverse a String",
            askedAt: "Cognizant",
            description:
                "Reverse a string using JavaScript.",
            category: "JavaScript Program",

            code: `function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Playwright"));`
        },

        {
            id: "longest-word",
            title: "Longest Word in a Sentence",
            askedAt: "KPMG",
            description:
                "Find the longest word in a sentence.",
            category: "JavaScript Program",

            code: `function longestWord(sentence) {
    const words = sentence.split(' ');

    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(
    longestWord("I am learning Playwright")
);`
        },

        {
            id: "second-largest",
            title: "Find Second Largest Number",
            askedAt: "Cognizant",
            description:
                "Find the second largest number in an array.",
            category: "JavaScript Program",

            code: `function secondLargest(numbers) {

    const uniqueNumbers = [...new Set(numbers)];

    uniqueNumbers.sort(
        (a, b) => b - a
    );

    return uniqueNumbers[1];
}

console.log(
    secondLargest([10, 5, 20, 8, 20])
);`
        },

        {
            id: "duplicate-elements",
            title: "Find Duplicate Elements",
            askedAt: "Practice",
            description:
                "Find duplicate values in an array.",
            category: "JavaScript Program",

            code: `function findDuplicates(numbers) {

    const seen = new Set();
    const duplicates = new Set();

    for (const number of numbers) {

        if (seen.has(number)) {
            duplicates.add(number);
        }

        seen.add(number);
    }

    return [...duplicates];
}

console.log(
    findDuplicates([1, 2, 3, 2, 4, 3])
);`
        },

        {
            id: "palindrome",
            title: "Check Palindrome",
            askedAt: "Practice",
            description:
                "Check whether a string is a palindrome.",
            category: "JavaScript Program",

            code: `function isPalindrome(value) {

    const reversed =
        value
            .split('')
            .reverse()
            .join('');

    return value === reversed;
}

console.log(
    isPalindrome("madam")
);`
        },

        {
            id: "character-frequency",
            title: "Character Frequency",
            askedAt: "Wissen",
            description:
                "Count the frequency of each character in a string.",
            category: "JavaScript Program",

            code: `function characterFrequency(str) {

    const frequency = {};

    for (const char of str) {

        frequency[char] =
            (frequency[char] || 0) + 1;
    }

    return frequency;
}

console.log(
    characterFrequency("playwright")
);`
        },

        {
            id: "remove-duplicates",
            title: "Remove Duplicate Elements",
            askedAt: "Practice",
            description:
                "Remove duplicate values from an array.",
            category: "JavaScript Program",

            code: `function removeDuplicates(numbers) {

    return [...new Set(numbers)];

}

console.log(
    removeDuplicates([1, 2, 2, 3, 3, 4])
);`
        },

        {
            id: "missing-number",
            title: "Find Missing Number",
            askedAt: "EPAM",
            description:
                "Find the missing number from a sequence.",
            category: "JavaScript Program",

            code: `function missingNumber(numbers) {

    const n = numbers.length + 1;

    const expected =
        n * (n + 1) / 2;

    const actual =
        numbers.reduce(
            (sum, number) => sum + number,
            0
        );

    return expected - actual;
}

console.log(
    missingNumber([1, 2, 3, 5])
);`
        },

        {
            id: "sort-without-sort",
            title: "Sort an Array Without sort()",
            askedAt: "Practice",
            description:
                "Sort numbers manually without using the built-in sort method.",
            category: "JavaScript Program",

            code: `function sortNumbers(numbers) {

    const result = [...numbers];

    for (let i = 0; i < result.length; i++) {

        for (
            let j = 0;
            j < result.length - i - 1;
            j++
        ) {

            if (result[j] > result[j + 1]) {

                const temp = result[j];

                result[j] = result[j + 1];

                result[j + 1] = temp;
            }
        }
    }

    return result;
}

console.log(
    sortNumbers([5, 2, 8, 1, 3])
);`
        }

    ],


    /*
     * ========================================================
     * REAL-WORLD SCENARIOS
     * ========================================================
     */

    scenarios: [

        {
            id: "ci-failure",
            title:
                "Tests pass locally but fail in CI/CD. What could be the reason?",

            category:
                "CI/CD",

            points: [
                "Environment differences",
                "Browser or dependency versions",
                "Environment variables / secrets",
                "Timing and synchronization issues",
                "Parallel execution and shared state",
                "Network or service availability",
                "File path differences",
                "Timezone / locale differences"
            ]
        },

        {
            id: "single-login",
            title:
                "How would you implement single login functionality?",

            category:
                "Authentication",

            answer:
                "Authenticate once, save the authenticated browser state using Playwright's storageState mechanism, and reuse that state for tests that need the same session."
        },

        {
            id: "parallel-execution",
            title:
                "How would you implement parallel execution?",

            category:
                "Parallel Execution",

            answer:
                "Use Playwright workers and appropriate project configuration. Ensure tests are independent and do not share mutable data or browser state."
        },

        {
            id: "mocking",
            title:
                "When should mocking be used?",

            category:
                "Mocking",

            answer:
                "Mock external services when the real dependency is slow, unavailable, expensive or difficult to control, while still keeping appropriate integration coverage against the real service."
        },

        {
            id: "project-explanation",
            title:
                "How would you explain your project?",

            category:
                "Project",

            answer:
                "Prepare a structured explanation covering the application, your role, framework architecture, test strategy, automation coverage, defects found, challenges, improvements and measurable contributions."
        }

    ],


    /*
     * ========================================================
     * API TESTING
     * ========================================================
     */

    api: [

        {
            id: "api-methods",
            title: "HTTP Methods",
            description:
                "GET, POST, PUT, PATCH and DELETE methods and when they are used.",
            category: "API Testing"
        },

        {
            id: "api-status-codes",
            title: "HTTP Status Codes",
            description:
                "Understand common 2xx, 3xx, 4xx and 5xx response status codes.",
            category: "API Testing"
        },

        {
            id: "api-authentication",
            title: "API Authentication",
            description:
                "Tokens, bearer authentication, headers and secure handling of credentials.",
            category: "Authentication"
        },

        {
            id: "playwright-api",
            title: "Playwright API Testing",
            description:
                "Use Playwright's request functionality to send API requests and validate responses.",
            category: "API Testing"
        },

        {
            id: "api-validation",
            title: "API Response Validation",
            description:
                "Validate status codes, headers, response bodies and important business fields.",
            category: "API Testing"
        }

    ],


    /*
     * ========================================================
     * SQL
     * ========================================================
     */

    sql: [

        {
            id: "select",
            title: "SELECT",
            description:
                "Retrieve records from a database using SELECT queries.",
            category: "SQL"
        },

        {
            id: "where",
            title: "WHERE",
            description:
                "Filter database records using conditions.",
            category: "SQL"
        },

        {
            id: "joins",
            title: "SQL JOINs",
            description:
                "INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL JOIN concepts.",
            category: "SQL"
        },

        {
            id: "group-by",
            title: "GROUP BY",
            description:
                "Group rows and perform aggregate calculations.",
            category: "SQL"
        },

        {
            id: "having",
            title: "HAVING",
            description:
                "Filter grouped results after aggregation.",
            category: "SQL"
        },

        {
            id: "subqueries",
            title: "Subqueries",
            description:
                "Use a query inside another query to solve data retrieval problems.",
            category: "SQL"
        }

    ],


    /*
     * ========================================================
     * AUTOMATION / FRAMEWORK
     * ========================================================
     */

    automation: [

        {
            id: "framework-architecture",
            title: "Framework Architecture",
            description:
                "Be prepared to explain folder structure, test organization, utilities, fixtures, configuration and reporting.",
            category: "Framework"
        },

        {
            id: "test-data",
            title: "Test Data Management",
            description:
                "Understand where test data should live and how it can be managed safely.",
            category: "Test Data"
        },

        {
            id: "configuration",
            title: "Playwright Configuration",
            description:
                "Understand projects, browsers, workers, retries, reporters, timeouts and baseURL.",
            category: "Configuration"
        },

        {
            id: "reporting",
            title: "Test Reporting",
            description:
                "Understand HTML reports, CI reports, screenshots, videos and traces.",
            category: "Reporting"
        },

        {
            id: "ci-cd",
            title: "CI/CD Integration",
            description:
                "Understand how automated tests are installed, executed and reported in a pipeline.",
            category: "CI/CD"
        }

    ]

};


/*
 * ============================================================
 * HELPER FUNCTIONS
 * ============================================================
 */


/**
 * Return complete vault data.
 */
function getVaultData() {

    return vaultData;

}


/**
 * Return one vault section.
 */
function getVaultSection(section) {

    if (!section) {
        return [];
    }

    return Array.isArray(vaultData[section])
        ? vaultData[section]
        : [];

}


/**
 * Flatten all study content for search.
 */
function getAllVaultContent() {

    const result = [];

    const sections = [
        "playwright",
        "javascript",
        "programs",
        "scenarios",
        "api",
        "sql",
        "automation"
    ];


    sections.forEach(section => {

        const items =
            vaultData[section] || [];


        items.forEach(item => {

            result.push({

                ...item,

                contentType:
                    section

            });

        });

    });


    return result;

}


/**
 * Search general vault content.
 */
function searchVault(searchTerm) {

    const term =
        String(searchTerm || "")
            .toLowerCase()
            .trim();


    if (!term) {

        return [];

    }


    return getAllVaultContent()

        .filter(item => {

            const searchableText = [

                item.title,

                item.description,

                item.answer,

                item.askedAt,

                item.category,

                ...(item.points || []),

                item.code

            ]

                .filter(Boolean)

                .join(" ")

                .toLowerCase();


            return searchableText.includes(term);

        });

}


/*
 * ============================================================
 * EXPOSE DATA GLOBALLY
 * ============================================================
 */

window.vaultData =
    vaultData;

window.getVaultData =
    getVaultData;

window.getVaultSection =
    getVaultSection;

window.getAllVaultContent =
    getAllVaultContent;

window.searchVault =
    searchVault;
