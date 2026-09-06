/*
 * ============================================================
 * PLAYWRIGHT QA INTERVIEW VAULT
 * Main Application
 * ============================================================
 *
 * Works with:
 *
 * /index.html
 * /pages/*.html
 * /data.js
 * /data/interviews.js
 *
 * Responsibilities:
 *
 * - Theme
 * - Mobile navigation
 * - Dashboard statistics
 * - Interview history
 * - Repeated topics
 * - Company panels
 * - Search
 * - Question modal
 * - Study topic rendering
 * - Cross-page navigation
 * - GitHub Pages compatible paths
 *
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       ELEMENTS
       ======================================================== */

    const sidebar =
        document.getElementById("sidebar");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const themeToggle =
        document.getElementById("themeToggle");

    const searchInput =
        document.getElementById("searchInput");

    const currentSection =
        document.getElementById("currentSection");

    const questionModal =
        document.getElementById("questionModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalQuestion =
        document.getElementById("modalQuestion");

    const modalMeta =
        document.getElementById("modalMeta");


    /* ========================================================
       INITIALISE
    ======================================================== */

    initialiseTheme();
    initialiseMobileMenu();
    initialiseNavigation();
    initialiseSearch();
    initialiseButtons();
    initialiseModal();

    updateDashboard();
    updateInterviewPages();
    updateRepeatedQuestions();
    updateVaultPages();
    initialiseVaultTopicCards();

    initialiseInterviewRows();
    initialiseCompanyTabs();
    initialiseQuestionItems();

    handleInitialRoute();


    /* ========================================================
       THEME
    ======================================================== */

    function initialiseTheme() {

        let savedTheme = null;

        try {
            savedTheme = localStorage.getItem(
                "playwright-vault-theme"
            );
        } catch (error) {
            console.warn(
                "Unable to read saved theme preference:",
                error
            );
        }

        const theme =
            savedTheme === "light" || savedTheme === "dark"
                ? savedTheme
                : "dark";

        setTheme(theme);

    }


    function updateThemeIcon() {

        if (!themeToggle) {
            return;
        }


        const isLight =
            document.documentElement.getAttribute("data-theme") ===
            "light";


        themeToggle.textContent =
            isLight ? "☀" : "☾";


        themeToggle.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark theme"
                : "Switch to light theme"
        );


        themeToggle.setAttribute(
            "title",
            isLight
                ? "Switch to dark theme"
                : "Switch to light theme"
        );

    }


    function setTheme(theme) {

        const nextTheme =
            theme === "light" ? "light" : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            nextTheme
        );

        document.body.classList.toggle(
            "light-theme",
            nextTheme === "light"
        );

        try {
            localStorage.setItem(
                "playwright-vault-theme",
                nextTheme
            );
        } catch (error) {
            console.warn(
                "Unable to save theme preference:",
                error
            );
        }

        updateThemeIcon();

    }


    /*
     * Use pointerup instead of relying only on click.
     * This works consistently with mouse, touch and mobile
     * browsers while keeping the theme state in one place.
     */
    document.addEventListener(
        "pointerup",
        event => {

            const button =
                event.target.closest("#themeToggle");

            if (!button) {
                return;
            }

            const currentTheme =
                document.documentElement.getAttribute("data-theme") ||
                "dark";

            setTheme(
                currentTheme === "dark"
                    ? "light"
                    : "dark"
            );

        }
    );


    /* ========================================================
       DATA HELPERS
       ======================================================== */

    function getInterviewsSafe() {

        try {

            if (
                typeof window.getInterviews ===
                "function"
            ) {

                const result =
                    window.getInterviews();


                if (Array.isArray(result)) {
                    return result;
                }

            }


            if (
                Array.isArray(
                    window.interviews
                )
            ) {

                return window.interviews;

            }


            if (
                Array.isArray(
                    window.interviewData
                )
            ) {

                return window.interviewData;

            }

        } catch (error) {

            console.error(
                "Unable to load interview data:",
                error
            );

        }


        return [];

    }


    function getAllQuestionsSafe() {

        try {

            if (
                typeof window.getAllInterviewQuestions ===
                "function"
            ) {

                const result =
                    window.getAllInterviewQuestions();


                if (Array.isArray(result)) {
                    return result;
                }

            }

        } catch (error) {

            console.error(
                "Unable to load interview questions:",
                error
            );

        }


        const interviews =
            getInterviewsSafe();


        const questions = [];


        interviews.forEach(
            (interview, interviewIndex) => {

                const interviewQuestions =
                    Array.isArray(
                        interview.questions
                    )
                        ? interview.questions
                        : [];


                interviewQuestions.forEach(
                    (question, questionIndex) => {

                        questions.push({

                            ...question,

                            id:
                                question.id ||
                                `${interview.id || interviewIndex}-${questionIndex}`,

                            interviewId:
                                interview.id,

                            company:
                                interview.company,

                            interviewDate:
                                interview.date,

                            role:
                                interview.role

                        });

                    }
                );

            }
        );


        return questions;

    }


    function getVaultSectionSafe(section) {

        try {

            if (
                typeof window.getVaultSection ===
                "function"
            ) {

                const result =
                    window.getVaultSection(
                        section
                    );


                if (Array.isArray(result)) {
                    return result;
                }

            }


            if (
                window.vaultData &&
                Array.isArray(
                    window.vaultData[section]
                )
            ) {

                return window.vaultData[section];

            }

        } catch (error) {

            console.error(
                `Unable to load ${section} data:`,
                error
            );

        }


        return [];

    }


    /* ========================================================
       NAVIGATION
       ======================================================== */

    function initialiseNavigation() {

        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach(link => {

            if (
                link.dataset.listenerAttached ===
                "true"
            ) {
                return;
            }


            link.dataset.listenerAttached =
                "true";


            link.addEventListener(
                "click",
                event => {

                    const target =
                        link.dataset.section;


                    if (!target) {

                        closeMobileMenu();

                        return;

                    }


                    const targetSection =
                        document.getElementById(
                            target
                        );


                    if (targetSection) {

                        event.preventDefault();

                        showSection(target);

                        closeMobileMenu();

                        return;

                    }


                    closeMobileMenu();

                }
            );

        });

    }


    function showSection(sectionId) {

        const sections =
            document.querySelectorAll(
                ".page-section"
            );


        const target =
            document.getElementById(
                sectionId
            );


        if (!target) {
            return;
        }


        sections.forEach(section => {

            section.classList.toggle(
                "active-section",
                section.id === sectionId
            );

        });


        hideSearchResults();


        document
            .querySelectorAll(".nav-link")
            .forEach(link => {

                link.classList.toggle(
                    "active",
                    link.dataset.section ===
                    sectionId
                );

            });


        updateCurrentSection(
            sectionId
        );


        try {

            history.replaceState(
                null,
                "",
                `#${encodeURIComponent(
                    sectionId
                )}`
            );

        } catch (error) {

            console.warn(
                "Unable to update URL:",
                error
            );

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    function updateCurrentSection(
        sectionId
    ) {

        if (!currentSection) {
            return;
        }


        const labels = {

            dashboard:
                "Dashboard",

            repeated:
                "Repeated Questions",

            playwright:
                "Playwright",

            javascript:
                "JavaScript",

            programs:
                "JS Programs",

            scenarios:
                "Real Scenarios",

            api:
                "API Testing",

            sql:
                "SQL",

            automation:
                "Automation",

            interviews:
                "Interview History",

            search:
                "Search"

        };


        currentSection.textContent =
            labels[sectionId] ||
            formatTitle(sectionId);

    }


    function handleInitialRoute() {

        const hash =
            getHash();


        if (!hash) {

            const dashboard =
                document.getElementById(
                    "dashboard"
                );


            if (dashboard) {
                showSection("dashboard");
            }


            return;

        }


        const interview =
            getInterviewsSafe().find(
                item =>
                    String(item.id) ===
                    String(hash)
            );


        if (interview) {

            const companyPanel =
                findCompanyPanel(hash);


            if (companyPanel) {

                activateCompany(hash);

                return;

            }

        }


        const target =
            document.getElementById(hash);


        if (target) {

            showSection(hash);

            return;

        }


        const dashboard =
            document.getElementById(
                "dashboard"
            );


        if (dashboard) {
            showSection("dashboard");
        }

    }


    window.addEventListener(
        "hashchange",
        () => {

            const hash =
                getHash();


            if (!hash) {
                return;
            }


            const interview =
                getInterviewsSafe().find(
                    item =>
                        String(item.id) ===
                        String(hash)
                );


            if (
                interview &&
                findCompanyPanel(hash)
            ) {

                activateCompany(hash);

                return;

            }


            const target =
                document.getElementById(hash);


            if (target) {
                showSection(hash);
            }

        }
    );


    function getHash() {

        try {

            return decodeURIComponent(
                window.location.hash
                    .replace(/^#/, "")
                    .trim()
            );

        } catch (error) {

            return window.location.hash
                .replace(/^#/, "")
                .trim();

        }

    }


    /* ========================================================
       MOBILE MENU
       ======================================================== */

    function initialiseMobileMenu() {

        if (!mobileMenu || !sidebar) {
            return;
        }


        mobileMenu.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                sidebar.classList.toggle(
                    "open"
                );

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (window.innerWidth > 900) {
                    return;
                }


                if (
                    sidebar.contains(event.target) ||
                    mobileMenu.contains(event.target)
                ) {

                    return;

                }


                closeMobileMenu();

            }
        );

    }


    function closeMobileMenu() {

        if (!sidebar) {
            return;
        }


        sidebar.classList.remove(
            "open"
        );

    }


    /* ========================================================
       DASHBOARD
       ======================================================== */

    function updateDashboard() {

        const interviews =
            getInterviewsSafe();


        const questions =
            getAllQuestionsSafe();


        updateStatistics(
            interviews,
            questions
        );

        updateDashboardProgress();


        renderDashboardInterviews(
            interviews
        );


        renderDashboardRepeated(
            questions
        );

    }


    function updateStatistics(
        interviews,
        questions
    ) {

        const statNumbers =
            document.querySelectorAll(
                ".stat-number"
            );


        if (!statNumbers.length) {
            return;
        }


        if (statNumbers[0]) {

            statNumbers[0].textContent =
                interviews.length;

        }


        if (statNumbers[1]) {

            statNumbers[1].textContent =
                questions.length;

        }


        let repeatedCount = 0;


        try {

            if (
                typeof window.getHighFrequencyTopics ===
                "function"
            ) {

                const result =
                    window.getHighFrequencyTopics();


                if (Array.isArray(result)) {
                    repeatedCount =
                        result.length;
                }

            } else {

                const topicMap =
                    buildTopicMap(
                        questions
                    );


                repeatedCount =
                    Object.values(topicMap)
                        .filter(
                            topic =>
                                topic.companies.length > 1
                        )
                        .length;

            }

        } catch (error) {

            console.warn(
                "Unable to calculate repeated topics:",
                error
            );

        }


        if (statNumbers[2]) {

            statNumbers[2].textContent =
                repeatedCount;

        }


        if (statNumbers[3]) {

            const mastered = questions.filter(question =>
                getProgress(question.id).status === "mastered"
            ).length;

            statNumbers[3].textContent =
                questions.length
                    ? Math.round((mastered / questions.length) * 100) + "%"
                    : "0%";

        }

    }


    function renderDashboardInterviews(
        interviews
    ) {

        const container =
            document.querySelector(
                ".interview-list"
            );


        if (!container) {
            return;
        }


        if (!interviews.length) {

            container.innerHTML = `

                <div class="empty-state">

                    <p>
                        No interview data available yet.
                    </p>

                </div>

            `;

            return;

        }


        container.innerHTML =
            interviews
                .map(
                    (interview, index) => {

                        const questions =
                            Array.isArray(
                                interview.questions
                            )
                                ? interview.questions
                                : [];


                        const count =
                            questions.length;


                        const letter =
                            getCompanyInitial(
                                interview.company
                            );


                        const id =
                            interview.id ||
                            `interview-${index}`;


                        return `

                            <button
                                type="button"
                                class="interview-row"
                                data-interview="${escapeAttribute(
                                    id
                                )}"
                            >

                                <div class="
                                    company-avatar
                                    ${escapeAttribute(
                                        getCompanyClass(
                                            interview.company
                                        )
                                    )}
                                ">
                                    ${escapeHTML(
                                        letter
                                    )}
                                </div>


                                <div class="interview-main">

                                    <div class="interview-title">
                                        ${escapeHTML(
                                            interview.company ||
                                            "Interview"
                                        )}
                                    </div>

                                    <div class="interview-subtitle">
                                        ${escapeHTML(
                                            interview.role ||
                                            "QA Automation"
                                        )}
                                    </div>

                                </div>


                                <div class="interview-count">

                                    ${count}

                                    ${
                                        count === 1
                                            ? "question"
                                            : "questions"
                                    }

                                </div>


                                <span class="arrow">
                                    →
                                </span>

                            </button>

                        `;

                    }
                )
                .join("");


        initialiseInterviewRows();

    }


    function renderDashboardRepeated(
        questions
    ) {

        const grid =
            document.querySelector(
                ".question-grid"
            );


        if (!grid) {
            return;
        }


        if (!questions.length) {

            grid.innerHTML = `

                <article class="question-card">

                    <div class="question-meta">

                        <span class="tag blue-tag">
                            TOPIC
                        </span>

                    </div>


                    <h3>
                        No interview topics yet
                    </h3>


                    <p>
                        Add interview questions to
                        interviews.js.
                    </p>

                </article>

            `;

            return;

        }


        const topicMap =
            buildTopicMap(
                questions
            );


        const topics =
            Object.values(topicMap)
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

                })
                .slice(0, 4);


        if (!topics.length) {
            return;
        }


        grid.innerHTML =
            topics
                .map(topic => {

                    const companyText =
                        topic.companies.join(
                            " · "
                        );


                    const priority =
                        getPriorityLabel(
                            topic.companies.length
                        );


                    return `

                        <article class="
                            question-card
                            ${
                                topic.companies.length >= 3
                                    ? "hot"
                                    : ""
                            }
                        ">

                            <div class="question-meta">

                                <span class="
                                    tag
                                    ${getTopicTagClass(
                                        topic.companies.length
                                    )}
                                ">
                                    ${priority}
                                </span>


                                <span>
                                    ${topic.companies.length}

                                    ${
                                        topic.companies.length === 1
                                            ? "interview"
                                            : "interviews"
                                    }
                                </span>

                            </div>


                            <h3>
                                ${escapeHTML(
                                    topic.topic
                                )}
                            </h3>


                            <p>
                                Asked under:
                                ${escapeHTML(
                                    topic.categories.join(
                                        ", "
                                    )
                                )}
                            </p>


                            <div class="companies">
                                ${escapeHTML(
                                    companyText
                                )}
                            </div>

                        </article>

                    `;

                })
                .join("");

    }


    /* ========================================================
       VAULT TOPIC PAGES
       ======================================================== */

    function updateVaultPages() {

        // IMPORTANT:
        // These IDs must match the actual containers in pages/*.html.
        // Keeping this mapping explicit makes every GitHub Pages route
        // render the correct vault data instead of leaving "Loading..."
        // on screen.
        renderTopicGrid(
            "playwright",
            "playwrightTopics"
        );


        renderTopicGrid(
            "javascript",
            "javascriptTopics"
        );


        renderTopicGrid(
            "programs",
            "programList"
        );


        renderTopicGrid(
            "scenarios",
            "scenarioList"
        );


        renderTopicGrid(
            "api",
            "apiTopicGrid"
        );


        renderTopicGrid(
            "sql",
            "sqlTopicGrid"
        );


        renderTopicGrid(
            "automation",
            "automationTopicGrid"
        );

    }


    function renderTopicGrid(
        sectionName,
        containerId
    ) {

        const container =
            document.getElementById(
                containerId
            );


        if (!container) {
            return;
        }


        const items =
            getVaultSectionSafe(
                sectionName
            );


        if (!items.length) {

            container.innerHTML = `

                <div class="empty-state">

                    <p>
                        No ${escapeHTML(
                            formatTitle(
                                sectionName
                            )
                        )} topics available yet.
                    </p>

                </div>

            `;

            return;

        }


        container.innerHTML =
            items
                .map(
                    (item, index) => {

                        const title =
                            item.title ||
                            "Untitled topic";


                        const description =
                            item.description ||
                            item.answer ||
                            "";


                        const category =
                            item.category ||
                            formatTitle(
                                sectionName
                            );


                        const askedAt =
                            item.askedAt ||
                            "";


                        return `

                            <article
                                class="topic-card"
                                data-topic-section="${escapeAttribute(
                                    sectionName
                                )}"
                                data-topic-index="${index}"
                                tabindex="0"
                                role="button"
                                aria-label="${escapeAttribute(
                                    title
                                )}"
                            >

                                <div class="topic-card-top">

                                    <span class="
                                        tag
                                        ${getVaultTagClass(
                                            sectionName
                                        )}
                                    ">
                                        ${escapeHTML(
                                            category
                                        )}
                                    </span>


                                    ${
                                        askedAt
                                            ? `
                                                <span class="topic-asked">
                                                    Asked: ${escapeHTML(
                                                        askedAt
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }

                                </div>


                                <h3>
                                    ${escapeHTML(
                                        title
                                    )}
                                </h3>


                                ${
                                    description
                                        ? `
                                            <p>
                                                ${escapeHTML(
                                                    description
                                                )}
                                            </p>
                                        `
                                        : ""
                                }


                                <div class="topic-card-footer">

                                    <span>
                                        Interview Prep
                                    </span>


                                    <span class="arrow">
                                        →
                                    </span>

                                </div>

                            </article>

                        `;

                    }
                )
                .join("");


        initialiseVaultTopicCards(
            container,
            items
        );

    }


    function initialiseVaultTopicCards(
        container,
        items
    ) {

        container
            .querySelectorAll(
                ".topic-card"
            )
            .forEach(card => {

                if (
                    card.dataset.listenerAttached ===
                    "true"
                ) {
                    return;
                }


                card.dataset.listenerAttached =
                    "true";


                const open = () => {

                    const index =
                        Number(
                            card.dataset.topicIndex
                        );


                    const item =
                        items[index];


                    if (!item) {
                        return;
                    }


                    openVaultTopicModal(
                        item
                    );

                };


                card.addEventListener(
                    "click",
                    open
                );


                card.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                                "Enter" ||
                            event.key ===
                                " "
                        ) {

                            event.preventDefault();

                            open();

                        }

                    }
                );

            });

    }


    function getVaultTagClass(
        sectionName
    ) {

        const classes = {

            playwright:
                "blue-tag",

            javascript:
                "orange-tag",

            programs:
                "blue-tag",

            scenarios:
                "orange-tag",

            api:
                "blue-tag",

            sql:
                "blue-tag",

            automation:
                "orange-tag"

        };


        return classes[sectionName] ||
            "blue-tag";

    }


    /* ========================================================
       INTERVIEW ROWS
       ======================================================== */

    function initialiseInterviewRows() {

        document
            .querySelectorAll(
                ".interview-row"
            )
            .forEach(row => {

                if (
                    row.dataset.listenerAttached ===
                    "true"
                ) {
                    return;
                }


                row.dataset.listenerAttached =
                    "true";


                row.addEventListener(
                    "click",
                    () => {

                        const interviewId =
                            row.dataset.interview;


                        if (interviewId) {

                            openInterview(
                                interviewId
                            );

                        }

                    }
                );

            });

    }


    function openInterview(
        interviewId
    ) {

        const interview =
            getInterviewsSafe().find(
                item =>
                    String(item.id) ===
                    String(interviewId)
            );


        if (!interview) {
            return;
        }


        if (
            findCompanyPanel(
                interviewId
            )
        ) {

            activateCompany(
                interviewId
            );

            return;

        }


        window.location.href =
            getPagesPath(
                "interviews.html"
            ) +
            "#" +
            encodeURIComponent(
                interviewId
            );

    }


    /* ========================================================
       COMPANY TABS
       ======================================================== */

    function initialiseCompanyTabs() {

        document
            .querySelectorAll(
                ".company-tab"
            )
            .forEach(tab => {

                if (
                    tab.dataset.listenerAttached ===
                    "true"
                ) {
                    return;
                }


                tab.dataset.listenerAttached =
                    "true";


                tab.addEventListener(
                    "click",
                    () => {

                        const companyId =
                            tab.dataset.company;


                        if (companyId) {

                            activateCompany(
                                companyId
                            );

                        }

                    }
                );

            });

    }


    function findCompanyPanel(
        companyId
    ) {

        const panels =
            document.querySelectorAll(
                ".company-panel"
            );


        for (
            const panel of panels
        ) {

            if (
                String(
                    panel.dataset.panel
                ) ===
                String(companyId)
            ) {

                return panel;

            }

        }


        return null;

    }


    function activateCompany(
        companyId
    ) {

        const interview =
            getInterviewsSafe().find(
                item =>
                    String(item.id) ===
                    String(companyId)
            );


        if (!interview) {
            return;
        }


        document
            .querySelectorAll(
                ".company-tab"
            )
            .forEach(tab => {

                tab.classList.toggle(
                    "active",
                    String(
                        tab.dataset.company
                    ) ===
                    String(companyId)
                );

            });


        document
            .querySelectorAll(
                ".company-panel"
            )
            .forEach(panel => {

                panel.classList.toggle(
                    "active",
                    String(
                        panel.dataset.panel
                    ) ===
                    String(companyId)
                );

            });


        renderCompanyPanel(
            interview
        );


        updateCurrentSection(
            "interviews"
        );


        try {

            history.replaceState(
                null,
                "",
                `#${encodeURIComponent(
                    companyId
                )}`
            );

        } catch (error) {

            console.warn(
                "Unable to update company URL:",
                error
            );

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    function renderCompanyPanel(
        interview
    ) {

        const panel =
            findCompanyPanel(
                interview.id
            );


        if (!panel) {
            return;
        }


        const list =
            panel.querySelector(
                ".question-list"
            );


        if (!list) {
            return;
        }


        const questions =
            Array.isArray(
                interview.questions
            )
                ? interview.questions
                : [];


        if (!questions.length) {

            list.innerHTML = `

                <div class="empty-state">

                    <p>
                        No questions recorded yet.
                    </p>

                </div>

            `;

            return;

        }


        list.innerHTML =
            questions
                .map(
                    (question, index) => {

                        const questionId =
                            question.id ||
                            `${interview.id}-${index}`;


                        return `

                            <div
                                class="question-item"
                                data-question-id="${escapeAttribute(
                                    questionId
                                )}"
                                data-interview-id="${escapeAttribute(
                                    interview.id
                                )}"
                                tabindex="0"
                                role="button"
                            >

                                <span>
                                    ${String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>


                                <div>

                                    <strong>
                                        ${escapeHTML(
                                            question.question ||
                                            "Interview question"
                                        )}
                                    </strong>


                                    <small>
                                        ${escapeHTML(
                                            question.category ||
                                            "Interview"
                                        )}
                                    </small>

                                </div>

                            </div>

                        `;

                    }
                )
                .join("");


        initialiseQuestionItems();

    }


    function updateInterviewPages() {

        const interviews =
            getInterviewsSafe();


        if (!interviews.length) {
            return;
        }


        interviews.forEach(
            interview => {

                const panel =
                    findCompanyPanel(
                        interview.id
                    );


                if (panel) {

                    renderCompanyPanel(
                        interview
                    );

                }

            }
        );


        initialiseCompanyTabs();


        const companyContainer =
            document.querySelector(
                ".interview-history-container"
            );


        if (
            companyContainer &&
            !companyContainer.querySelector(
                ".company-tab"
            )
        ) {

            renderInterviewHistoryPage(
                interviews,
                companyContainer
            );

        }

    }


    function renderInterviewHistoryPage(
        interviews,
        container
    ) {

        if (!container) {
            return;
        }


        container.innerHTML = `

            <div class="company-tabs">

                ${interviews
                    .map(
                        (interview, index) => {

                            return `

                                <button
                                    type="button"
                                    class="
                                        company-tab
                                        ${
                                            index === 0
                                                ? "active"
                                                : ""
                                        }
                                    "
                                    data-company="${escapeAttribute(
                                        interview.id
                                    )}"
                                >

                                    ${escapeHTML(
                                        interview.company ||
                                        "Interview"
                                    )}

                                </button>

                            `;

                        }
                    )
                    .join("")}

            </div>


            <div class="company-panels">

                ${interviews
                    .map(
                        (interview, index) => {

                            return `

                                <section
                                    class="
                                        company-panel
                                        ${
                                            index === 0
                                                ? "active"
                                                : ""
                                        }
                                    "
                                    data-panel="${escapeAttribute(
                                        interview.id
                                    )}"
                                >

                                    <div class="page-header">

                                        <div>

                                            <div class="eyebrow">

                                                ${escapeHTML(
                                                    interview.status ||
                                                    "COMPLETED"
                                                )}

                                            </div>


                                            <h2>

                                                ${escapeHTML(
                                                    interview.company ||
                                                    "Interview"
                                                )}

                                            </h2>


                                            <p>

                                                ${escapeHTML(
                                                    interview.role ||
                                                    "QA Automation"
                                                )}

                                                ${
                                                    interview.date
                                                        ? ` · ${escapeHTML(
                                                            interview.date
                                                        )}`
                                                        : ""
                                                }

                                            </p>

                                        </div>

                                    </div>


                                    <div class="question-list"></div>

                                </section>

                            `;

                        }
                    )
                    .join("")}

            </div>

        `;


        initialiseCompanyTabs();


        interviews.forEach(
            interview => {

                renderCompanyPanel(
                    interview
                );

            }
        );


        const hash =
            getHash();


        if (
            hash &&
            interviews.some(
                interview =>
                    String(interview.id) ===
                    String(hash)
            )
        ) {

            activateCompany(hash);

        }

    }


    /* ========================================================
       REPEATED QUESTIONS
       ======================================================== */

    function updateRepeatedQuestions() {

        const table =
            document.querySelector(
                ".repeat-table"
            );


        if (!table) {
            return;
        }


        const questions =
            getAllQuestionsSafe();


        if (!questions.length) {

            table.innerHTML = `

                <div class="table-head">

                    <span>TOPIC</span>

                    <span>INTERVIEWS</span>

                    <span>PRIORITY</span>

                </div>


                <div class="table-row">

                    <div>

                        <strong>
                            No topics yet
                        </strong>

                        <small>
                            Add interview questions to
                            interviews.js.
                        </small>

                    </div>


                    <div>—</div>


                    <div class="priority">
                        —
                    </div>

                </div>

            `;

            return;

        }


        const topics =
            buildTopicMap(
                questions
            );


        const repeated =
            Object.values(topics)
                .filter(
                    topic =>
                        topic.companies.length > 1
                )
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


        if (!repeated.length) {

            table.innerHTML = `

                <div class="table-head">

                    <span>TOPIC</span>

                    <span>INTERVIEWS</span>

                    <span>PRIORITY</span>

                </div>


                <div class="table-row">

                    <div>

                        <strong>
                            No repeated topics yet
                        </strong>

                        <small>
                            Topics appearing in multiple
                            interviews will appear here.
                        </small>

                    </div>


                    <div>—</div>


                    <div class="priority">
                        —
                    </div>

                </div>

            `;

            return;

        }


        table.innerHTML = `

            <div class="table-head">

                <span>TOPIC</span>

                <span>INTERVIEWS</span>

                <span>PRIORITY</span>

            </div>


            ${repeated
                .map(topic => {

                    return `

                        <div class="table-row">

                            <div>

                                <strong>
                                    ${escapeHTML(
                                        topic.topic
                                    )}
                                </strong>


                                <small>
                                    ${escapeHTML(
                                        topic.categories.join(
                                            ", "
                                        )
                                    )}
                                </small>

                            </div>


                            <div>
                                ${escapeHTML(
                                    topic.companies.join(
                                        " · "
                                    )
                                )}
                            </div>


                            <div class="priority">
                                ${getStars(
                                    topic.companies.length
                                )}
                            </div>

                        </div>

                    `;

                })
                .join("")}

        `;

    }


    function buildTopicMap(
        questions
    ) {

        const map = {};


        questions.forEach(
            question => {

                const topic =
                    normaliseTopic(
                        question.category
                    );


                const key =
                    topic.toLowerCase();


                if (!map[key]) {

                    map[key] = {

                        topic:
                            topic,

                        count:
                            0,

                        companies:
                            [],

                        categories:
                            []

                    };

                }


                map[key].count++;


                if (
                    question.company &&
                    !map[key].companies.includes(
                        question.company
                    )
                ) {

                    map[key].companies.push(
                        question.company
                    );

                }


                if (
                    question.category &&
                    !map[key].categories.includes(
                        question.category
                    )
                ) {

                    map[key].categories.push(
                        question.category
                    );

                }

            }
        );


        return map;

    }


    /* ========================================================
       SEARCH
       ======================================================== */

    function initialiseSearch() {

        if (!searchInput) {
            return;
        }


        searchInput.addEventListener(
            "input",
            () => {

                performSearch(
                    searchInput.value
                );

            }
        );


        searchInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    searchInput.value = "";

                    hideSearchResults();

                }

            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    (
                        event.metaKey ||
                        event.ctrlKey
                    ) &&
                    event.key.toLowerCase() ===
                    "k"
                ) {

                    event.preventDefault();

                    searchInput.focus();

                    searchInput.select();

                }

            }
        );

    }


    function performSearch(
        value
    ) {

        const term =
            String(value || "")
                .trim();


        if (!term) {

            hideSearchResults();

            return;

        }


        const results =
            getSearchResults(
                term
            );


        showSearchResults(
            term,
            results
        );

    }


    function getSearchResults(
        term
    ) {

        const results = [];

        const lowerTerm =
            term.toLowerCase();


        const questions =
            getAllQuestionsSafe();


        /*
         * Interview questions.
         */

        questions.forEach(
            question => {

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


                if (
                    searchableText.includes(
                        lowerTerm
                    )
                ) {

                    results.push({

                        type:
                            "Interview",

                        title:
                            question.question ||
                            "Interview question",

                        category:
                            question.category,

                        company:
                            question.company,

                        role:
                            question.role,

                        interviewId:
                            question.interviewId,

                        questionId:
                            question.id,

                        dataType:
                            "interview"

                    });

                }

            }
        );


        /*
         * General vault content.
         */

        if (
            typeof window.searchVault ===
            "function"
        ) {

            try {

                const vaultResults =
                    window.searchVault(
                        term
                    );


                if (
                    Array.isArray(
                        vaultResults
                    )
                ) {

                    vaultResults.forEach(
                        result => {

                            results.push({

                                type:
                                    formatTitle(
                                        result.contentType ||
                                        result.type ||
                                        "Vault"
                                    ),

                                title:
                                    result.title ||
                                    "Vault item",

                                category:
                                    result.category,

                                description:
                                    result.description,

                                answer:
                                    result.answer,

                                points:
                                    result.points,

                                code:
                                    result.code,

                                askedAt:
                                    result.askedAt,

                                section:
                                    result.contentType,

                                itemId:
                                    result.id,

                                dataType:
                                    "vault"

                            });

                        }
                    );

                }

            } catch (error) {

                console.warn(
                    "Vault search unavailable:",
                    error
                );

            }

        }


        return results;

    }


    function showSearchResults(
        term,
        results
    ) {

        let searchSection =
            document.getElementById(
                "searchSection"
            );


        let resultsContainer =
            document.getElementById(
                "searchResults"
            );


        let summary =
            document.getElementById(
                "searchSummary"
            );


        /*
         * Every page has the global search box, but only the
         * dashboard originally contained the search-results section.
         * Create it automatically on inner pages so searching from
         * Playwright / JavaScript / API / SQL etc. works as expected.
         */
        if (!searchSection || !resultsContainer) {

            const content =
                document.querySelector(".content");

            if (!content) {
                return;
            }

            let dynamicSearch =
                document.getElementById("searchSection");

            if (!dynamicSearch) {

                dynamicSearch =
                    document.createElement("section");

                dynamicSearch.id = "searchSection";
                dynamicSearch.className = "search-page";

                dynamicSearch.innerHTML = `
                    <div class="page-header">
                        <div>
                            <div class="eyebrow">SEARCH</div>
                            <h1>Search Results</h1>
                            <p id="searchSummary">Search across your interview vault.</p>
                        </div>
                    </div>
                    <div id="searchResults"></div>
                `;

                content.appendChild(dynamicSearch);

            }

            searchSection = dynamicSearch;
            resultsContainer =
                dynamicSearch.querySelector("#searchResults");

        }


        document
            .querySelectorAll(
                ".page-section"
            )
            .forEach(section => {

                section.classList.remove(
                    "active-section"
                );

            });


        searchSection.classList.add(
            "active-search"
        );


        if (summary) {

            summary.textContent =
                `${results.length} ${
                    results.length === 1
                        ? "result"
                        : "results"
                } for "${term}"`;

        }


        if (!results.length) {

            resultsContainer.innerHTML = `

                <div class="empty-search">

                    <div class="empty-icon">
                        ⌕
                    </div>


                    <h3>
                        No results found
                    </h3>


                    <p>
                        Try Playwright, authentication,
                        fixtures, CI/CD, Promise or API.
                    </p>

                </div>

            `;


            updateCurrentSection(
                "search"
            );


            return;

        }


        resultsContainer.innerHTML =
            results
                .map(
                    (result, index) => {

                        return `

                            <article
                                class="search-result"
                                data-result-index="${index}"
                                tabindex="0"
                                role="button"
                            >

                                <div class="search-result-meta">

                                    <span class="tag blue-tag">

                                        ${escapeHTML(
                                            result.type
                                        )}

                                    </span>


                                    ${
                                        result.company
                                            ? `
                                                <span>
                                                    ${escapeHTML(
                                                        result.company
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }


                                    ${
                                        result.category
                                            ? `
                                                <span>
                                                    ${escapeHTML(
                                                        result.category
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }


                                    ${
                                        result.askedAt
                                            ? `
                                                <span>
                                                    Asked:
                                                    ${escapeHTML(
                                                        result.askedAt
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }

                                </div>


                                <h3>
                                    ${escapeHTML(
                                        result.title
                                    )}
                                </h3>


                                ${
                                    result.description
                                        ? `
                                            <p>
                                                ${escapeHTML(
                                                    result.description
                                                )}
                                            </p>
                                        `
                                        : ""
                                }


                                <div class="search-result-action">
                                    Click to open →
                                </div>

                            </article>

                        `;

                    }
                )
                .join("");


        resultsContainer
            .querySelectorAll(
                ".search-result"
            )
            .forEach(
                (element, index) => {

                    const result =
                        results[index];


                    const open = () => {

                        if (!result) {
                            return;
                        }


                        if (
                            result.dataType ===
                            "interview"
                        ) {

                            const question =
                                getAllQuestionsSafe()
                                    .find(
                                        q => {

                                            return (
                                                String(
                                                    q.id
                                                ) ===
                                                String(
                                                    result.questionId
                                                ) &&
                                                (
                                                    !result.interviewId ||
                                                    String(
                                                        q.interviewId
                                                    ) ===
                                                    String(
                                                        result.interviewId
                                                    )
                                                )
                                            );

                                        }
                                    );


                            if (question) {

                                openQuestionModal(
                                    question
                                );

                                return;

                            }


                            if (
                                result.interviewId
                            ) {

                                openInterview(
                                    result.interviewId
                                );

                            }


                            return;

                        }


                        openVaultSearchResult(
                            result
                        );

                    };


                    element.addEventListener(
                        "click",
                        open
                    );


                    element.addEventListener(
                        "keydown",
                        event => {

                            if (
                                event.key ===
                                    "Enter" ||
                                event.key ===
                                    " "
                            ) {

                                event.preventDefault();

                                open();

                            }

                        }
                    );

                }
            );


        updateCurrentSection(
            "search"
        );

    }


    function openVaultSearchResult(
        result
    ) {

        if (
            result.section &&
            result.itemId
        ) {

            const items =
                getVaultSectionSafe(
                    result.section
                );


            const item =
                items.find(
                    entry =>
                        String(entry.id) ===
                        String(result.itemId)
                );


            if (item) {

                openVaultTopicModal(
                    item
                );

                return;

            }

        }


        openVaultTopicModal({

            title:
                result.title,

            category:
                result.category,

            description:
                result.description,

            answer:
                result.answer,

            points:
                result.points,

            code:
                result.code,

            askedAt:
                result.askedAt

        });

    }


    function hideSearchResults() {

        const searchSection =
            document.getElementById(
                "searchSection"
            );


        if (searchSection) {

            searchSection.classList.remove(
                "active-search"
            );

        }

    }


    /* ========================================================
       BUTTONS / CROSS-PAGE NAVIGATION
       ======================================================== */

    function initialiseButtons() {

        document
            .querySelectorAll(
                "[data-go]"
            )
            .forEach(button => {

                if (
                    button.dataset.listenerAttached ===
                    "true"
                ) {
                    return;
                }


                button.dataset.listenerAttached =
                    "true";


                button.addEventListener(
                    "click",
                    () => {

                        const target =
                            button.dataset.go;


                        if (!target) {
                            return;
                        }


                        if (
                            document.getElementById(
                                target
                            )
                        ) {

                            showSection(
                                target
                            );

                            return;

                        }


                        const pageMap = {

                            dashboard:
                                "index.html",

                            repeated:
                                "repeated-questions.html",

                            playwright:
                                "playwright.html",

                            javascript:
                                "javascript.html",

                            programs:
                                "coding.html",

                            scenarios:
                                "scenarios.html",

                            api:
                                "api.html",

                            sql:
                                "sql.html",

                            automation:
                                "automation.html",

                            interviews:
                                "interviews.html"

                        };


                        const page =
                            pageMap[target];


                        if (!page) {
                            return;
                        }


                        window.location.href =
                            getPageDestination(
                                page
                            );

                    }
                );

            });

    }


    function getPageDestination(
        page
    ) {

        const currentPath =
            window.location.pathname;


        const inPages =
            currentPath.includes(
                "/pages/"
            );


        if (inPages) {

            if (
                page ===
                "index.html"
            ) {

                return "../index.html";

            }


            return page;

        }


        if (
            page ===
            "index.html"
        ) {

            return "index.html";

        }


        return `pages/${page}`;

    }


    function getPagesPath(
        page
    ) {

        return getPageDestination(
            page
        );

    }


    /* ========================================================
       QUESTION ITEMS
       ======================================================== */

    function initialiseQuestionItems() {

        document
            .querySelectorAll(
                ".question-item"
            )
            .forEach(item => {

                if (
                    item.dataset.listenerAttached ===
                    "true"
                ) {
                    return;
                }


                item.dataset.listenerAttached =
                    "true";


                const open = () => {

                    const questionId =
                        item.dataset.questionId;


                    const interviewId =
                        item.dataset.interviewId;


                    if (questionId) {

                        const question =
                            getAllQuestionsSafe()
                                .find(
                                    q => {

                                        const sameQuestion =
                                            String(
                                                q.id
                                            ) ===
                                            String(
                                                questionId
                                            );


                                        const sameInterview =
                                            !interviewId ||
                                            String(
                                                q.interviewId
                                            ) ===
                                            String(
                                                interviewId
                                            );


                                        return (
                                            sameQuestion &&
                                            sameInterview
                                        );

                                    }
                                );


                        if (question) {

                            openQuestionModal(
                                question
                            );

                            return;

                        }

                    }


                    const strong =
                        item.querySelector(
                            "strong"
                        );


                    const small =
                        item.querySelector(
                            "small"
                        );


                    if (strong) {

                        openQuestionModal({

                            question:
                                strong.textContent.trim(),

                            category:
                                small
                                    ? small.textContent.trim()
                                    : "Interview"

                        });

                    }

                };


                item.addEventListener(
                    "click",
                    open
                );


                item.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                                "Enter" ||
                            event.key ===
                                " "
                        ) {

                            event.preventDefault();

                            open();

                        }

                    }
                );

            });

    }


    /* ========================================================
       PERSONAL PROGRESS
       ======================================================== */

    function getProgressStorageKey(id) {

        return `playwright-vault-progress-${String(id || "unknown")}`;

    }


    function getProgress(id) {

        if (!id) {
            return { status: "not-started", notes: "" };
        }

        try {

            const saved =
                JSON.parse(
                    localStorage.getItem(
                        getProgressStorageKey(id)
                    ) || "null"
                );

            if (saved && typeof saved === "object") {
                return {
                    status: saved.status || "not-started",
                    notes: saved.notes || ""
                };
            }

        } catch (error) {
            console.warn("Unable to load saved progress:", error);
        }

        return { status: "not-started", notes: "" };

    }


    function saveProgress(id, updates) {

        if (!id) {
            return;
        }

        const current = getProgress(id);

        const next = {
            ...current,
            ...updates,
            updatedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(
                getProgressStorageKey(id),
                JSON.stringify(next)
            );
        } catch (error) {
            console.warn("Unable to save progress:", error);
        }

        updateDashboardProgress();

    }


    function updateDashboardProgress() {

        const questions = getAllQuestionsSafe();
        const statNumbers = document.querySelectorAll(".stat-number");

        if (statNumbers[3]) {
            const mastered = questions.filter(question =>
                getProgress(question.id).status === "mastered"
            ).length;

            statNumbers[3].textContent =
                questions.length
                    ? Math.round((mastered / questions.length) * 100) + "%"
                    : "0%";
        }

    }


    /* ========================================================
       MODAL
       ======================================================== */

    function initialiseModal() {

        if (!questionModal) {
            return;
        }


        if (modalClose) {

            modalClose.addEventListener(
                "click",
                closeModal
            );

        }


        const backdrop =
            questionModal.querySelector(
                ".modal-backdrop"
            );


        if (backdrop) {

            backdrop.addEventListener(
                "click",
                closeModal
            );

        }


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeModal();

                }

            }
        );

    }


    function openQuestionModal(
        question
    ) {

        if (!questionModal) {
            return;
        }


        if (modalQuestion) {

            modalQuestion.textContent =
                question.question || "";

        }


        if (modalMeta) {

            const metaParts = [];


            if (question.company) {

                metaParts.push(
                    question.company
                );

            }


            if (question.category) {

                metaParts.push(
                    question.category
                );

            }


            if (question.role) {

                metaParts.push(
                    question.role
                );

            }


            if (question.interviewDate) {

                metaParts.push(
                    question.interviewDate
                );

            }


            modalMeta.textContent =
                metaParts.join(
                    " · "
                );

        }


        renderModalBody({

            id:
                question.id,

            title:
                "📝 My Answer / Notes",

            answer:
                question.answer ||
                question.notes ||
                "Answer not added yet.",

            points:
                question.points,

            code:
                question.code,

            followUps:
                question.followUps,

            tip:
                "Prepare a 30-second answer, a practical example and possible follow-up questions."

        });


        openModal();

    }


    function openVaultTopicModal(
        item
    ) {

        if (!questionModal) {
            return;
        }


        if (modalQuestion) {

            modalQuestion.textContent =
                item.title || "";

        }


        if (modalMeta) {

            const metaParts = [];


            if (item.category) {

                metaParts.push(
                    item.category
                );

            }


            if (item.askedAt) {

                metaParts.push(
                    `Asked at: ${item.askedAt}`
                );

            }


            modalMeta.textContent =
                metaParts.join(
                    " · "
                );

        }


        renderModalBody({

            id:
                item.id,

            title:
                item.code
                    ? "💻 Example / Explanation"
                    : "📝 Interview-Ready Answer",

            answer:
                item.answer ||
                item.description ||
                "No detailed answer has been added yet.",

            points:
                item.points,

            code:
                item.code,

            followUps:
                item.followUps,

            tip:
                "Prepare a 30-second explanation, a practical example and possible follow-up questions."

        });


        openModal();

    }


    function renderModalBody(
        data
    ) {

        const answerPlaceholder =
            questionModal.querySelector(
                ".answer-placeholder"
            );

        if (!answerPlaceholder) {
            return;
        }

        const answer =
            data.answer ||
            "No answer has been added yet.";

        const progress =
            getProgress(data.id);

        const followUps =
            Array.isArray(data.followUps)
                ? data.followUps
                : [];

        answerPlaceholder.innerHTML = `

            <div class="answer-title">
                ${escapeHTML(data.title || "📝 Answer / Notes")}
            </div>

            <p class="modal-answer-text">
                ${escapeHTML(answer)}
            </p>

            ${
                Array.isArray(data.points) && data.points.length
                    ? `
                        <div class="answer-points">
                            <strong>Key points:</strong>
                            <ul>
                                ${data.points.map(point => `
                                    <li>${escapeHTML(point)}</li>
                                `).join("")}
                            </ul>
                        </div>
                    `
                    : ""
            }

            ${
                data.code
                    ? `
                        <div class="modal-code-section">
                            <div class="answer-title">
                                💻 JavaScript Example
                            </div>
                            <pre><code>${escapeHTML(data.code)}</code></pre>
                        </div>
                    `
                    : ""
            }

            ${
                followUps.length
                    ? `
                        <div class="answer-points">
                            <strong>Likely follow-up questions:</strong>
                            <ul>
                                ${followUps.map(item => `
                                    <li>${escapeHTML(item)}</li>
                                `).join("")}
                            </ul>
                        </div>
                    `
                    : ""
            }

            ${
                data.id
                    ? `
                        <div class="personal-progress">
                            <div class="answer-title">
                                🎯 My Preparation Status
                            </div>

                            <div class="progress-actions" role="group" aria-label="Preparation status">
                                <button type="button" class="progress-button ${progress.status === "not-started" ? "active" : ""}" data-status="not-started">Not started</button>
                                <button type="button" class="progress-button ${progress.status === "practicing" ? "active" : ""}" data-status="practicing">Practicing</button>
                                <button type="button" class="progress-button ${progress.status === "mastered" ? "active" : ""}" data-status="mastered">✓ Mastered</button>
                            </div>

                            <label class="notes-label" for="personalNotes">My notes / interview-ready answer</label>
                            <textarea id="personalNotes" class="personal-notes" rows="6" placeholder="Write your own 30–60 second answer, example or follow-up notes..."></textarea>
                            <div class="notes-saved" id="notesSaved" aria-live="polite">Saved locally in this browser.</div>
                        </div>
                    `
                    : ""
            }

            <div class="answer-tip">
                <strong>Preparation tip:</strong>
                ${escapeHTML(
                    data.tip ||
                    "Prepare a concise explanation, practical example and follow-up questions."
                )}
            </div>

        `;

        if (!data.id) {
            return;
        }

        const notes =
            answerPlaceholder.querySelector("#personalNotes");

        if (notes) {
            notes.value = progress.notes;

            let saveTimer;

            notes.addEventListener("input", () => {
                clearTimeout(saveTimer);
                saveTimer = setTimeout(() => {
                    saveProgress(data.id, { notes: notes.value });
                }, 250);
            });
        }

        answerPlaceholder
            .querySelectorAll(".progress-button")
            .forEach(button => {
                button.addEventListener("click", () => {
                    const status = button.dataset.status || "not-started";

                    answerPlaceholder
                        .querySelectorAll(".progress-button")
                        .forEach(item => item.classList.remove("active"));

                    button.classList.add("active");

                    saveProgress(data.id, { status });
                });
            });

    }


    function openModal() {

        questionModal.classList.add(
            "open"
        );


        questionModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );


        if (modalClose) {

            setTimeout(
                () => {

                    modalClose.focus();

                },
                50
            );

        }

    }


    function closeModal() {

        if (!questionModal) {
            return;
        }


        questionModal.classList.remove(
            "open"
        );


        questionModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    /* ========================================================
       UTILITY FUNCTIONS
       ======================================================== */

    function getCompanyInitial(
        company
    ) {

        if (!company) {
            return "?";
        }


        return String(company)
            .trim()
            .charAt(0)
            .toUpperCase();

    }


    function getCompanyClass(
        company
    ) {

        return String(
            company || ""
        )
            .toLowerCase()
            .replace(
                /[^a-z0-9]+/g,
                "-"
            )
            .replace(
                /^-|-$/g,
                "");

    }


    function getPriorityLabel(
        companyCount
    ) {

        if (companyCount >= 3) {
            return "HOT";
        }


        if (companyCount >= 2) {
            return "HIGH";
        }


        return "TOPIC";

    }


    function getTopicTagClass(
        companyCount
    ) {

        if (companyCount >= 3) {
            return "red-tag";
        }


        if (companyCount >= 2) {
            return "orange-tag";
        }


        return "blue-tag";

    }


    function getStars(
        companyCount
    ) {

        if (companyCount >= 4) {
            return "★★★★★";
        }


        if (companyCount === 3) {
            return "★★★★★";
        }


        if (companyCount === 2) {
            return "★★★★☆";
        }


        return "★★★☆☆";

    }


    function normaliseTopic(
        topic
    ) {

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


        return aliases[value] ||
            value;

    }


    function formatTitle(
        value
    ) {

        if (!value) {
            return "";
        }


        return String(value)
            .replace(
                /[-_]/g,
                " "
            )
            .replace(
                /\b\w/g,
                char =>
                    char.toUpperCase()
            );

    }


    /* ========================================================
       SAFE HTML
       ======================================================== */

    function escapeHTML(
        value
    ) {

        return String(
            value ?? ""
        )

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    function escapeAttribute(
        value
    ) {

        return escapeHTML(
            value
        );

    }

});
