---
layout: post
permalink: java/java-11-new-features
title: 'Java 11 new features'
excerpt: 'In this article, we are going to discover Java 11 new features'
tags: java java11
---

## Introduction

Java 11 was released on 25 September 2018 and it is the first Long Term Support (LTS) release after Java 8. You can download it [here](https://jdk.java.net/java-se-ri/11) or from the OpenJDK [archive link](https://jdk.java.net/archive/) and here are the features that I enjoyed from this release:

## HTTP Client

A HTTP Client API that was introduced as an incubating API in JDK 9 and updated in JDK 10 and now a standard feature in Java 11. The API provides non-blocking request and response semantics through `CompletableFutures`, which can be chained to trigger dependent actions. Back-pressure and flow-control of request and response bodies is provided for via the Platform's reactive-streams support in the `java.util.concurrent.Flow` API.

Here is an example on how we can use the HTTP Client to make a simple `GET` request

```java
public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient httpClient = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .connectTimeout(Duration.ofSeconds(5))
                .build();
        HttpRequest httpRequest = HttpRequest.newBuilder().GET()
                .uri(URI.create("https://jsonplaceholder.typicode.com/users/1"))
                .build();
        HttpResponse httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());

        HttpHeaders headers = httpResponse.headers();
        headers.map().forEach((k, v) -> System.out.println(k + ": " + v));
        System.out.println(httpResponse.statusCode());
        System.out.println(httpResponse.body());
    }
}
```

## Running Java Files

This feature gives the ability to run Java File without the need to compile it before.

```java
public class HelloJava11 {
    public static void main(String[] args) {
        System.out.println("Hello Java 11!");
    }
}
```

Before Java 11, we need to compile this file before run it

```sh
> javac HelloJava11.java
> java HelloJava11
Hello Java 11!
```

But with Java 11, we can directly run the file using java command

```sh
> java HelloJava11.java
Hello Java 11!
```

## New String methods

<p class="mb-0">New methods added to the <code>String</code> class:</p>

- **strip**: Returns ths string with all leading and trailing white space removed
- **stripLeading**: Returns ths string with all leading white space removed
- **stripTrailing**: Returns ths string with all trailing white space removed
- **isBlank**: Returns true if the string is empty or contains only white space
- **lines**: Returns a stream of lines extracted from this string, separated by line terminators

```java
String text = "Java 11 \n    \n    New     \n Features";
List<String> lines = text.lines()
        .filter(line -> !line.isBlank())
        .map(String::strip)
        .collect(Collectors.toList());
assertThat(lines).containsExactly("Java 11", "New", "Features");
```

## New Files methods

<p class="mb-0">New methods added to the <code>Files</code> class:</p>

- **readString**: Reads all content from a file into a string
- **writeString**: Write a CharSequence to a file

```java
Path filePath = Files.writeString(Paths.get("target/file.txt"), "Some text");
String fileContent = Files.readString(filePath);
Assert.assertEquals("Some text", fileContent);
```

## Flight Recorder Recorder

A profiling tool to record events originating from applications, the JVM and the OS. Events are stored in a single file that can be attached to bug reports and examined by support engineers, allowing after-the-fact analysis of issues in the period leading up to a problem. This tool is now **Open-Source** in OpenJDK whereas it used to be commercial tool in Oracle.
