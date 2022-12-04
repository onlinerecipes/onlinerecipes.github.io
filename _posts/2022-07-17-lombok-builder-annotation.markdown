---
layout: post
permalink: java/lombok-builder-annotation
title: 'Lombok @Builder Annotation'
excerpt: 'In this article, we are going to discover the Lombok @Builder annotation'
tags: java lombok
---

## Introduction

In this article, we are going to discover the Lombok `@Builder` Annotation that we can use in our Java projects.
First we are going to take a look at the Builder design pattern. Then we are going to demonstrate how to implement this design pattern without using the **Lombok** library. Finally, we are going to illustrate how to use the Lombok `@Builder` Annotation to reduce our boilerplate code.

## Builder Design Pattern

From [Wikipedia](https://en.wikipedia.org/wiki/Builder_pattern), The builder pattern is a design pattern to provide flexible solution to create complex objects in object-oriented programming. For example, we can use this design pattern to create objects with many fields and this what we are going to implement without and with Lombok library.

## Builder Implementation

For this, we are going to use the following class where we are going to implement the Builder design pattern to simplify its creating and avoid using Constructors with multiple arguments.

```java
public class Bicycle {
    private String model;
    private String color;
    private int height;
    private double price;
}
```

### Without Lombok

<p style="margin-bottom: 0">One of the common implementation of the Builder design pattern is to create a static nested class with:</p>

- the same properties as the parent class
- setter methods for each property and returns the builder object for each setter
- `build` method which return the created instance of the parent object

<p class="code-tabs"></p>

- Bicycle.java

  ```java
  public class Bicycle {
      private String model;
      private String color;
      private int height;
      private double price;

      private Bicycle(String model, String color, int height, double price) {
          this.model = model;
          this.color = color;
          this.height = height;
          this.price = price;
      }

      public static class Builder {
          private String model;
          private String color;
          private int height;
          private double price;

          private Builder() {
          }

          public Bicycle.Builder model(String model) {
              this.model = model;
              return this;
          }

          public Bicycle.Builder color(String color) {
              this.color = color;
              return this;
          }

          public Bicycle.Builder height(int height) {
              this.height = height;
              return this;
          }

          public Bicycle.Builder price(double price) {
              this.price = price;
              return this;
          }

          public Bicycle build() {
              return new Bicycle(this.model, this.color, this.height, this.price);
          }
      }

      public static Bicycle.Builder builder() {
          return new Bicycle.Builder();
      }
  }
  ```

- Usage.java

  ```java
  public class Usage {

      public static void main(String[] args) {
          Bicycle bicycle = Bicycle.builder().model("model").color("color").height(100).price(150).build();
      }
  }
  ```

As we can see, it is simple to implement. But if we want to apply it to many classes, it would be great if we can avoid writing all this boilerplate code for each class. The good news is Lombok can help us by juste adding a simple annotation :)

### With Lombok

First, we need to add Lombok to our project dependency management. If you are using maven, here is the dependency that you should add to your `pom.xml` file

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.4</version>
</dependency>
```

Once added, the only think we need to do is to add the `@Builder` annotation to add the builder to our model.

```java
@Builder
public class Bicycle {
    private String model;
    private String color;
    private int height;
    private double price;
}
```

And yes it is as simple as that and we hope that you find it useful :)
