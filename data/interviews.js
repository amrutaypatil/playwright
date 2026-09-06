/*
 * ============================================================
 * PLAYWRIGHT QA INTERVIEW VAULT
 * Interview Database
 * ============================================================
 *
 * IMPORTANT:
 *
 * This file contains ONLY real interview history.
 *
 * To add a new interview:
 * 1. Copy the template at the bottom.
 * 2. Change the company/date/role.
 * 3. Add the questions.
 * 4. Optionally add answer/notes to each question.
 * 5. Save and push to GitHub.
 *
 * You should NOT need to edit index.html for a new interview.
 * ============================================================
 */

const interviews = [

    /*
     * ========================================================
     * COGNIZANT
     * ========================================================
     */

    {
        id: "cognizant",
        company: "Cognizant",
        date: "",
        role: "QA Automation",
        status: "Completed",

        questions: [

            {
                id: "cognizant-01",
                question:
                    "How would you rate yourself out of 5 in Playwright?",
                category: "Playwright"
            },

            {
                id: "cognizant-02",
                question:
                    "Explain the OOP concepts.",
                category: "JavaScript / OOP"
            },

            {
                id: "cognizant-03",
                question:
                    "Where do we use OOP concepts?",
                category: "JavaScript / Framework"
            },

            {
                id: "cognizant-04",
                question:
                    "Explain the framework.",
                category: "Framework"
            },

            {
                id: "cognizant-05",
                question:
                    "Explain Browser, Context, and Page.",
                category: "Playwright"
            },

            {
                id: "cognizant-06",
                question:
                    "Explain textContent() and getByText().",
                category: "Locators"
            },

            {
                id: "cognizant-07",
                question:
                    "Find the locators.",
                category: "Locators"
            },

            {
                id: "cognizant-08",
                question:
                    "Explain test data: how to use it and which file to create.",
                category: "Test Data"
            },

            {
                id: "cognizant-09",
                question:
                    "Explain database connection and how to validate data.",
                category: "Database"
            },

            {
                id: "cognizant-10",
                question:
                    "How do you generate a token, and where do you store it?",
                category: "Authentication / API"
            },

            {
                id: "cognizant-11",
                question:
                    "Explain authentication and where do we store and use it?",
                category: "Authentication"
            },

            {
                id: "cognizant-12",
                question:
                    "Explain API methods.",
                category: "API Testing"
            },

            {
                id: "cognizant-13",
                question:
                    "How do you upload a file?",
                category: "Playwright"
            },

            {
                id: "cognizant-14",
                question:
                    "Where do we use Promises?",
                category: "JavaScript"
            },

            {
                id: "cognizant-15",
                question:
                    "Explain fully parallel execution. How do you open multiple browsers and execute test cases?",
                category: "Parallel Execution"
            },

            {
                id: "cognizant-16",
                question:
                    "Write a program to reverse a string.",
                category: "JavaScript Program"
            }

        ]
    },


    /*
     * ========================================================
     * EPAM
     * ========================================================
     */

    {
        id: "epam",
        company: "EPAM",
        date: "",
        role: "QA Automation",
        status: "Completed",

        questions: [

            {
                id: "epam-01",
                question:
                    "Explain how fullyParallel works in Playwright.",
                category: "Parallel Execution"
            },

            {
                id: "epam-02",
                question:
                    "What is CI/CD? Explain it briefly.",
                category: "CI/CD"
            },

            {
                id: "epam-03",
                question:
                    "Explain Promises and async/await in JavaScript.",
                category: "JavaScript"
            },

            {
                id: "epam-04",
                question:
                    "Explain intersection in Playwright.",
                category: "Playwright"
            },

            {
                id: "epam-05",
                question:
                    "What is a fixture? Explain with an example.",
                category: "Fixtures"
            },

            {
                id: "epam-06",
                question:
                    "Explain Hooks in Playwright.",
                category: "Hooks"
            },

            {
                id: "epam-07",
                question:
                    "Explain the output of the JavaScript Promise + setTimeout program.",
                category: "Event Loop"
            }

        ]
    },


    /*
     * ========================================================
     * WISSEN
     * ========================================================
     */

    {
        id: "wissen",
        company: "Wissen",
        date: "",
        role: "QA Automation",
        status: "Completed",

        questions: [

            {
                id: "wissen-01",
                question:
                    "How can we implement a single-login functionality in Playwright so that the same authenticated session can be reused across multiple test cases?",
                category: "Authentication"
            },

            {
                id: "wissen-02",
                question:
                    "Tests execute successfully locally but fail in the CI/CD pipeline. What could be the possible reasons?",
                category: "CI/CD / Debugging"
            },

            {
                id: "wissen-03",
                question:
                    "How would you implement Page Object Model in Playwright to locate and interact with the Google Search button?",
                category: "POM"
            },

            {
                id: "wissen-04",
                question:
                    "How can we implement parallel test execution in Playwright?",
                category: "Parallel Execution"
            },

            {
                id: "wissen-05",
                question:
                    "Explain the CI/CD process and how to integrate Playwright scripts into a pipeline, including reports.",
                category: "CI/CD"
            },

            {
                id: "wissen-06",
                question:
                    "How can we automate API endpoint testing using Playwright?",
                category: "API Testing"
            },

            {
                id: "wissen-07",
                question:
                    "Explain your project, role, contributions and defects identified, reported and resolved.",
                category: "Project"
            },

            {
                id: "wissen-08",
                question:
                    "When should we use mocking, and what is the purpose?",
                category: "Mocking"
            },

            {
                id: "wissen-09",
                question:
                    "How can we inspect elements inside a Shadow DOM?",
                category: "Shadow DOM"
            }

        ]
    },


    /*
     * ========================================================
     * KPMG
     * ========================================================
     */

    {
        id: "kpmg",
        company: "KPMG",
        date: "",
        role: "QA Automation",
        status: "Completed",

        questions: [

            {
                id: "kpmg-01",
                question:
                    "textContent() and inputValue()",
                category: "Playwright"
            },

            {
                id: "kpmg-02",
                question:
                    "Headless vs headed mode?",
                category: "Playwright"
            },

            {
                id: "kpmg-03",
                question:
                    "What is page.pause() and when should it be used?",
                category: "Debugging"
            },

            {
                id: "kpmg-04",
                question:
                    "Actionability checks in Playwright",
                category: "Playwright"
            },

            {
                id: "kpmg-05",
                question:
                    "Element visibility / Visible actionability check",
                category: "Playwright"
            },

            {
                id: "kpmg-06",
                question:
                    "Annotations in Playwright",
                category: "Playwright"
            },

            {
                id: "kpmg-07",
                question:
                    "What are hard and soft assertions?",
                category: "Assertions"
            },

            {
                id: "kpmg-08",
                question:
                    "Write a JavaScript program to print the longest word in a sentence.",
                category: "JavaScript Program"
            }

        ]
    }

];


/*
 * ============================================================
 * HELPER FUNCTIONS
 * ============================================================
 */


/**
 * Return all interviews.
 */
function getInterviews() {

    return interviews;

}


/**
 * Find an interview by ID.
 */
function getInterviewById(id) {

    return interviews.find(
        interview =>
            String(interview.id) === String(id)
    );

}


/**
 * Return all interview questions as one flat array.
 *
 * Useful for:
 * - Search
 * - Repeated question detection
 * - Statistics
 * - Dashboard
 */
function getAllInterviewQuestions() {

    const questions = [];

    interviews.forEach(interview => {

        const interviewQuestions =
            Array.isArray(interview.questions)
                ? interview.questions
                : [];

        interviewQuestions.forEach(question => {

            questions.push({

                ...question,

                interviewId:
                    interview.id,

                company:
                    interview.company,

                interviewDate:
                    interview.date,

                role:
                    interview.role

            });

        });

    });

    return questions;

}


/**
 * Search interview questions.
 */
function searchInterviewQuestions(searchTerm) {

    const term =
        String(searchTerm || "")
            .toLowerCase()
            .trim();


    if (!term) {

        return [];

    }


    return getAllInterviewQuestions()

        .filter(question => {

            const searchableText = [

                question.question,

                question.category,

                question.company,

                question.role,

                question.answer,

                question.notes

            ]

                .filter(Boolean)

                .join(" ")

                .toLowerCase();


            return searchableText.includes(term);

        });

}


/**
 * Get total number of interviews.
 */
function getInterviewCount() {

    return interviews.length;

}


/**
 * Get total number of interview questions.
 */
function getInterviewQuestionCount() {

    return getAllInterviewQuestions().length;

}


/**
 * Normalise interview topics.
 *
 * This keeps repeated-topic detection consistent
 * throughout the application.
 */
function normaliseInterviewTopic(topic) {

    if (!topic) {

        return "Other";

    }


    const value =
        String(topic).trim();


    const aliases = {

        "CI/CD / Debugging":
            "CI/CD",

        "Authentication / API":
            "Authentication",

        "JavaScript / Framework":
            "Framework",

        "JavaScript Program":
            "JavaScript Programs"

    };


    return aliases[value] || value;

}


/**
 * Find repeated questions/topics.
 *
 * Questions are grouped using their category.
 */
function getRepeatedTopics() {

    const topicMap = {};

    getAllInterviewQuestions().forEach(question => {

        const topic =
            normaliseInterviewTopic(
                question.category
            );


        if (!topicMap[topic]) {

            topicMap[topic] = {

                topic: topic,

                count: 0,

                companies: [],

                questions: []

            };

        }


        topicMap[topic].count++;


        if (
            question.company &&
            !topicMap[topic].companies
                .includes(question.company)
        ) {

            topicMap[topic].companies.push(
                question.company
            );

        }


        topicMap[topic].questions.push(
            question.question
        );

    });


    return Object.values(topicMap)

        .sort((a, b) => {

            if (
                b.companies.length !==
                a.companies.length
            ) {

                return (
                    b.companies.length -
                    a.companies.length
                );

            }

            return b.count - a.count;

        });

}


/**
 * Get topics that appeared in more than one interview.
 */
function getHighFrequencyTopics() {

    return getRepeatedTopics()

        .filter(
            topic =>
                topic.companies.length > 1
        );

}


/*
 * ============================================================
 * ADDING A NEW INTERVIEW
 * ============================================================
 *
 * Copy this template and paste it BEFORE the final ];
 *
 * {
 *     id: "new-company",
 *     company: "New Company",
 *     date: "2026-09-10",
 *     role: "QA Automation Engineer",
 *     status: "Completed",
 *
 *     questions: [
 *
 *         {
 *             id: "new-company-01",
 *             question:
 *                 "Explain Playwright fixtures.",
 *             category: "Fixtures",
 *
 *             answer:
 *                 "An interview-ready answer goes here.",
 *
 *             notes:
 *                 "Add your personal notes here."
 *         }
 *
 *     ]
 * }
 *
 * ============================================================
 */


/*
 * ============================================================
 * EXPOSE DATA GLOBALLY
 * ============================================================
 */

window.interviews =
    interviews;

window.getInterviews =
    getInterviews;

window.getInterviewById =
    getInterviewById;

window.getAllInterviewQuestions =
    getAllInterviewQuestions;

window.searchInterviewQuestions =
    searchInterviewQuestions;

window.getInterviewCount =
    getInterviewCount;

window.getInterviewQuestionCount =
    getInterviewQuestionCount;

window.normaliseInterviewTopic =
    normaliseInterviewTopic;

window.getRepeatedTopics =
    getRepeatedTopics;

window.getHighFrequencyTopics =
    getHighFrequencyTopics;
