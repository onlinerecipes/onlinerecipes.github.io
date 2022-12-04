---
permalink: java/how-to-reverse-string-in-java
layout: post
title: 'How to reverse a String in Java'
excerpt: 'In this article I am going to share with you two code examples to reverse a String in java without using any external library'
tags:
  - java
category: java
---

In this article I'm going to share with you two code examples to reverse a String in java without using any external library

## Example 1

```java
public class ReverseStringDemo {
    public static void main(String[] args) {
        String text = "Hello World!";
        String reversedText = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            reversedText += text.charAt(i);
        }
        System.out.println(reversedText);
    }
}
```

In this example, we are using String concatenation. But as `Strings` are immutables in java, this code will create `text.length()`
String objects in the JVM! To fix this bad memory management, we are going to use the `StringBuilder` as shown in the next example.

## Example 2

```java
public class ReverseStringDemo {
    public static void main(String[] args) {
        String text = "Hello World!";
        StringBuilder stringBuilder = new StringBuilder(text);
        String reversedText = stringBuilder.reverse().toString();
        System.out.println(reversedText);
    }
}
```
