---
layout: post
permalink: junit/parametrized-tests
title: 'JUnit 5 Parametrized Tests'
excerpt: 'In this article, we are going to discover how we can write Parametrized Tests using JUnit 5'
tags: java junit
---

## Introduction

Parameterized tests make it possible to run a test multiple times with different arguments. They are declared using the `@ParameterizedTest` annotation and we must declare at least one source that will provide the arguments for each test invocation. The following example demonstrates a Parametrized Test that uses the `@ValueSource` annotation to specify an `int` array as source of arguments

```java
@ParameterizedTest
@ValueSource(ints = { 1, 3, 5 })
void testMethod(int number) {
    assertTrue(IntegerUtils.isOdd(number));
}
```

## Prerequisites

In order to use Parameterized Tests you need to add `junit-jupiter-params` dependency to our `pom.xml` file. At the moment of writing this article, the latest version is `5.8.2` and you can find the latest version [here](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-params)

```xml
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter-engine</artifactId>
  <version>5.8.2</version>
  <scope>test</scope>
</dependency>

<!-- Parameterized Tests -->
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter-params</artifactId>
  <version>5.8.2</version>
  <scope>test</scope>
</dependency>
```

## Sources of Arguments

JUnit 5 provides quite a few _source_ annotations that we are going to provide a brief overview and an example for each of them

### @ValueSource

This source annotation lets you specify a single array of literal values and can only be used for providing a single argument per Parameterized Test invocation. For example, the following test method will be invoked three times, with the values `JUNIT 5`, `PARAMETERIZED`, and `TESTS` respectively.

```java
@ParameterizedTest
@ValueSource(strings = { "JUNIT 5", "PARAMETERIZED", "TESTS" })
void testMethod(String str) {
    assertTrue(StringUtils.isUppercase(str));
}
```

### @EnumSource

This source annotation provides a convenient way to use `enum` constants as Parametrized Test arguments. For example, the following test method will be invoked three times, with the values `S`, `M`, and `M` respectively.

```java
enum Size {
    S, M, L;
}

@ParameterizedTest
@EnumSource(Size.class)
void testMethod(Size size) {
    assertNotNull(size);
}
```

### @MethodSource

This source annotation allows you to refer to one or more _factory_ methods that generates arguments to the Parametrized Tests. Each _factory_ method must generate a stream of arguments and must be `static` without any arguments.

<p class="code-tabs"></p>

- Single Argument

  ```java
  static Stream<String> factoryMethod() {
      return Stream.of("apple", "banana");
  }

  @ParameterizedTest
  @MethodSource("factoryMethod")
  void testMethod(String argument) {
      assertNotNull(argument);
  }
  ```

- Multiple Arguments

  ```java
  static Stream<Arguments> factoryMethod() {
      return Stream.of(
          arguments("apple", Arrays.asList("a", "b")),
          arguments("lemon", Arrays.asList("x", "y"))
      );
  }

  @ParameterizedTest
  @MethodSource("factoryMethod")
  void testMethod(String str, List<String> list) {
      assertEquals(5, str.length());
      assertEquals(2, list.size());
  }
  ```

### @CsvSource

This source annotation allows you to express argument lists as comma-separated values. Each string provided via the annotation attribute represents a CSV record and results in one invocation of the Parameterized Test

```java
@ParameterizedTest
@CsvSource({
    "java,         4",
    "javascript,   10",
    "python,       6"
})
void testMethod(String str, int length) {
    assertEquals(length, str.length());
}
```

## Conclusion

In this quick tutorial, we have discovered how we can write Parametrized Tests using JUnit 5 and we hope you find it useful :)
