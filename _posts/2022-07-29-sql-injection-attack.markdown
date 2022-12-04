---
layout: post
permalink: security/sql-injection-attack
title: 'SQL Injection Attack'
excerpt: 'In this article, we are going to discover the SQL Injection Attack and how to protect our application from this attack'
tags: sql security
---

## Introduction

SQL (Structured Query Language) is a programming language to communicate with a database and it is widely used by web developers to communicate with data from their web applications. SQL Injection is an attack on a web application by compromising its database with malicious SQL statements. As it is a common attack, let's try to learn more about it and how to defend against it.

## What is SQL Injection ?

SQL injection is an attack on a web application that allows an attacker to insert malicious SQL statements into the web application in order to access or destroy sensitive data from a database. SQL Injection was first discovered by Jeff Forristal in 1998. Since then it has been the main priority of web developers when designing applications.

Consider a web application that has a system that allows users with a valid username and password to log in and uses the following SQL query to identify a user:

```sql
SELECT id FROM USERS WHERE name = '<user-name>' AND password = '<hashed-user-password>';
```

When the user Smith wishes to connect to the website, he provides his name and password. The following query is executed:

```sql
SELECT id FROM USERS WHERE name = 'Smith' AND password = '14760e62f3788c4ff17f8d11f3788c4ff17f8d11b';
```

A hacker could then provide `Smith';--` as name with any password and the following query will be executed:

```sql
SELECT uid FROM Users WHERE name = 'Smith';--' AND password = '4e383a1918b432a9bb770';
```

As the `--` characters mark the beginning of a comment in SQL. The query is therefore equivalent to:

```sql
SELECT uid FROM Users WHERE name = 'Smith';
```

## SQL Injection Types

Now that we know the basics of an SQL injection vulnerability, let's explore the different types of SQL Injection attacks and the reason behind each one.

### In-Band SQL Injection

<p class="mb-05">In-Band SQL injection is the simplest form of SQL Injection. In this attack, the attacker is able to use the web application to insert the malicious SQL code into the application and obtain his results. There are two sub-variations of this method:</p>

#### Error-based method

The idea behind this method is to get more information about the structure of the database and the names of the tables that the web application is using. For example, an error message might contain the name of the table included in the query and the names of the columns in the table. This data can then be used to create new attacks.

#### Union-based method

This method takes advantage of certain methods in order to entirely divert the return of the original SQL query in order to make it return in a single query a large volume of data, directly retrieved from the database.

### Blind SQL Injection

<p class="mb-05">In this form of SQL injection, the attacker sends various queries to the database to evaluate how the application parses these responses. There are two sub-variations of this method:</p>

#### Time-based method

This method helps an attacker determine if a vulnerability is present in a web application. An attacker uses a predefined time function of the database management system used by the application. For example, in MySQL, the `SLEEP` function tells the database to wait for a certain number of seconds.

#### Boolean method

In this method, the attacker evaluates which parts of a user's input are vulnerable to SQL injections by trying two different versions of a boolean clause across the input: `AND 1=1` or `AND 1=2`. If the application works normally in the first case but encounters an error in the second case, this indicates that the application is vulnerable to an SQL Injection attack.

## How to defend against it ?

So far, we have explored web application vulnerabilities that can lead to SQL injection attacks and in this section, we are going to explore different techniques to protect our web application against SQL Injection attacks.

### Escaping special characters

This solution consists in escaping the special characters contained in the user input. In PHP we can use the `mysqli_real_escape_string` function for this.

### Using a prepared statement

This solution consists in using prepared queries. In this case, the query is compiled before inserting the parameters and executing it, which prevents any code inserted in the parameters from being interpreted.

## Conclusion

In this article, we have discovered how the SQL Injection Attack and how to protect our web applications from this attack we hope you find it useful :)
