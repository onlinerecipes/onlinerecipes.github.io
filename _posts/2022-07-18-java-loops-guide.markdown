---
layout: post
permalink: java/java-loops-guide
title: 'Java Loops Guide'
excerpt: 'In this article, we are going to discover how we can execute a program repeatedly using Java Loops'
tags: java
---

## Introduction

In this article, we are going to discover how we can execute an operation or a set of operations repeatedly using Java Loops and here are the types of loops that we can find in Java:

## For loop

A for-loop has two parts: a header specifying the iteration, and a body which is executed once per iteration. The header often declares an explicit loop counter or loop variable, which allows the body to know which iteration is being executed. For-loops are typically used when the number of iterations is known before entering the loop

<p class="code-tabs"></p>

- Example

  ```java
  for (int i = 0; i < 3; i++) {
      System.out.println("For loop: i = " + i);
  }
  // Output
  // For loop: i = 0
  // For loop: i = 1
  // For loop: i = 2
  ```

- Syntax

  ```java
  for (initialization; test expression; step update) {
      operation;
  }
  ```

The **initialization**, **test expression** and **step update** used in the for loop statement are _optional_ and when absents, this will generate an infinite loop:

```java
for ( ; ; ) {
    // infinite loop
}
```

## Foreach loop

The Foreach loop has been added since Java 5 to loop through an Array or a Collection. It will move respectively from the first element to the last element of an array or a collection and it is also referred to as the **Enhanced For Loop**

<p class="code-tabs"></p>

- Example

  ```java
  List<String> fruits = Arrays.asList("Banana", "Apple", "Apricot");

  for (String fruit : fruits) {
      System.out.println("Fruit: " + fruit);
  }
  // Output
  // Fruit: Banana
  // Fruit: Apple
  // Fruit: Apricot
  ```

- Syntax

  ```java
  for (ItemType item : arrayOrCollection) {
      // Do something to item
  }
  ```

## While loop

The While loop is used to execute an operation or a set of operations multiple times while a condition is always `true`. The While loop is generally used when the number of iterations cannot be determined before.

<p class="code-tabs"></p>

- Flowchart

  ![](/assets/java-loops-guide/while-loop-workchart.svg)

- Example

  ```java
  int i = 0;
  while (i < 3) {
      System.out.println("While loop: i = " + i++);
  }
  // Output
  // Do-While loop: i = 0
  // Do-While loop: i = 1
  // Do-While loop: i = 2
  ```

- Syntax

  ```java
  while (condition){
      // statement
  }
  ```

## Do-While loop

The Do-While loop is always executed at least once. After iteration, the program checks the condition, if the condition is still `true`, the command block will be executed again.

<p class="code-tabs"></p>

- Flowchart

  ![](/assets/java-loops-guide/do-while-loop-workchart.svg)

- Example

  ```java
  int i = 0;
  do {
      System.out.println("Do-While loop: i = " + i++);
  } while (i < 3);
  // Output
  // Do-While loop: i = 0
  // Do-While loop: i = 1
  // Do-While loop: i = 2
  ```

- Syntax

  ```java
  do {
      // statement
  } while (condition);
  ```

## Conclusion

In this quick tutorial, we have explored Java's Loops and we hope you find it useful :)
