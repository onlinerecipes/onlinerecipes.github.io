---
layout: post
permalink: java/java-exceptions
title: 'Java Exceptions'
excerpt: 'In this article, we are going to discover Java Exceptions and how we can use them in Java'
tags: java exceptions
---

## Introduction

An **Exception** is a signal that something special has happened. It interrupts the normal execution flow of the program. **Throwing** an exception is used to signal this special something and **Catching** an exception allows us to perform the necessary actions to deal with this situation. Handling exceptions is essential and poor management can have severe consequences.

<p class="code-tabs"></p>

- ArithmeticException

  ```java
  public class ArithmeticExceptionExample {
      public static void main(String[] [] args) {
          int i = 10;
          int j = 0;
          System.out.println("division result = " + (i / j));
      }
  }
  // Exception in thread "main" java.lang.ArithmeticException: / by zero
  ```

- NullPointerException

  ```java
  public class NullPointerExceptionExample {
      public static void main(String[] [] args) {
          String str = null;
          System.out.println(str.length());
      }
  }
  // Exception in thread "main" java.lang.NullPointerException
  ```

## Java Exceptions Hierarchy

<p class="mb-05">The class at the top of the exception class hierarchy is the <code>Throwable</code> class, which is a direct subclass of the Object class. Throwable has two direct subclasses:</p>

- `Error` that indicates serious problems that a reasonable application should not try to catch. Most such errors are abnormal conditions. A method is not required to declare in its throws clause any subclasses of Error that might be thrown during the execution of the method but not caught, since these errors are abnormal conditions that should never occur.
- `Exception` that indicates conditions that a reasonable application might want to catch. Exception and any subclasses that are not also subclasses of `RuntimeException` are checked exceptions. Checked exceptions need to be declared in a method or constructor's throws clause if they can be thrown by the execution of the method or constructor and propagate outside the method or constructor boundary.

![](/assets/java-exceptions/exceptions-hierarchy.svg)

## Java Exceptions Handling

<p class="mb-0">Java proposes to handle Exceptions in 3 separate blocks:</p>

- `try` bloc: place the instructions which could trigger one or many exceptions for which an exception handling is implemented

- `catch` blocks: catch the specified exceptions and perform the necessary actions to deal with this type of exception

- `finally` block: optional bloc contains cleanup instructions and it is executed whatever the result of the try bloc.

```java
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int i = scanner.nextInt();
        int j = scanner.nextInt();
        try {
            System.out.println("division result = " + (i / j));
        } catch (ArithmeticException e) {
            System.out.println("We can not divide by 0!");
        } finally {
            System.out.println("finally bloc");
        }
    }
}
```

## Custom Exceptions

It is possible to create our own Exceptions by creating new classes that extends `Exception` class or its subclasses. As any Java classes, we can add particular attributes and methods to our own Exceptions.

<p class="code-tabs"></p>

- CustomException

  ```java
  public class CustomException extends Exception {
      public CustomException(String message) {
          super(message);
      }
  }
  ```

- Usage

  ```java
  throw new CustomException("exception message");
  ```

## Conclusion

In this quick tutorial, we have discovered Java Exceptions and we hope you find it useful :)
