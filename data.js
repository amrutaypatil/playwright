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

const sentence = "You can focus some tests";

console.log(longestWord(sentence));`
        },

        {
            id: "palindrome",
            title: "Palindrome",
            askedAt: "Practice",
            description:
                "Check whether a string or number is a palindrome.",
            category: "JavaScript Program",

            code: `function isPalindrome(value) {
    const str = String(value);

    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));`
        },

        {
            id: "character-frequency",
            title: "Character Frequency",
            askedAt: "Practice",
            description:
                "Count how many times each character appears in a string.",
            category: "JavaScript Program",

            code: `function characterFrequency(str) {
    const frequency = {};

    for (const char of str) {
        frequency[char] =
            (frequency[char] || 0) + 1;
    }

    return frequency;
}

console.log(characterFrequency("playwright"));`
        },

        {
            id: "second-largest",
            title: "Find Second Largest Number",
            askedAt: "Practice",
            description:
                "Find the second largest unique number in an array.",
            category: "JavaScript Program",

            code: `function secondLargest(numbers) {
    const unique = [...new Set(numbers)];

    unique.sort((a, b) => b - a);

    return unique[1];
}

console.log(
    secondLargest([10, 5, 20, 8, 20])
);`
        },

        {
            id: "duplicate-numbers",
            title: "Find Duplicate Numbers",
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
    findDuplicates([1, 2, 3, 2, 4, 1])
);`
        },

        {
            id: "reverse-words",
            title: "Reverse Words in a Sentence",
            askedAt: "Practice",
            description:
                "Reverse the order of words in a sentence.",
            category: "JavaScript Program",

            code: `function reverseWords(sentence) {
    return sentence
        .trim()
        .split(/\\s+/)
        .reverse()
        .join(' ');
}

console.log(
    reverseWords("Playwright automation testing")
);`
        },

        {
            id: "missing-number",
            title: "Find Missing Number",
            askedAt: "Practice",
            description:
                "Find the missing number from a sequence.",
            category: "JavaScript Program",

            code: `function missingNumber(numbers) {
    const n = numbers.length + 1;

    const expected = n * (n + 1) / 2;

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
