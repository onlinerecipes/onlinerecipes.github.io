<p class="code-tabs"></p>

- HelloMaven.java

  ```java
  package com.github.ahenteti.hellomaven;

  public class HelloMaven {

      public static void hello() {
          System.out.println("Hello Maven Central Repository!");
      }
  }
  ```

- pom.xml

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>

  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.github.ahenteti</groupId>
    <artifactId>hello-maven</artifactId>
    <version>1.0</version>

    <name>${project.groupId}:${project.artifactId}</name>
    <description>A hello-world maven library</description>
    <url>https://github.com/ahenteti/hello-maven</url>
  </project>
  ```
