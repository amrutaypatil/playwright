---

layout: default
title: SQL Interview Questions
------------------------------

# SQL Interview Questions

Common SQL questions for QA, SDET and automation interviews.

---

## Joins

<details>
<summary>1. What is an INNER JOIN?</summary>

### Answer

An `INNER JOIN` returns records where the join condition matches in both tables.

```sql
SELECT
    e.name,
    d.department_name
FROM employees e
INNER JOIN departments d
    ON e.department_id = d.department_id;
```

Only employees having a matching department are returned.

</details>

---

<details>
<summary>2. What is the difference between INNER JOIN and LEFT JOIN?</summary>

### Answer

`INNER JOIN` returns only matching records.

`LEFT JOIN` returns all records from the left table and matching records from the right table.

```sql
SELECT
    e.name,
    d.department_name
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id;
```

Employees without a matching department can still appear in the result.

</details>

---

## Aggregations

<details>
<summary>3. How do you find departments having more than five employees?</summary>

### Answer

Use `GROUP BY` with `HAVING`.

```sql
SELECT
    department_id,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;
```

`WHERE` filters rows before grouping.

`HAVING` filters grouped results.

</details>

---

<details>
<summary>4. What is the difference between WHERE and HAVING?</summary>

### Answer

`WHERE` filters individual rows.

```sql
SELECT *
FROM employees
WHERE salary > 50000;
```

`HAVING` filters aggregated groups.

```sql
SELECT
    department_id,
    COUNT(*)
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;
```

</details>

---

## Intermediate SQL

<details>
<summary>5. How would you find duplicate email addresses?</summary>

### Answer

```sql
SELECT
    email,
    COUNT(*) AS occurrence_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

The query identifies email values that occur more than once.

</details>

---

<details>
<summary>6. What is an index and why is it used?</summary>

### Answer

An index is a database structure that can improve data retrieval performance.

Example:

```sql
CREATE INDEX idx_users_email
ON users(email);
```

Indexes can improve read performance but also have costs:

* Additional storage
* Maintenance during inserts
* Maintenance during updates
* Maintenance during deletes

Indexes should therefore be designed according to query patterns and workload.

</details>

---

<details>
<summary>7. How do you find the second highest salary?</summary>

### Answer

One approach is:

```sql
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
```

This returns the second distinct highest salary.

</details>
