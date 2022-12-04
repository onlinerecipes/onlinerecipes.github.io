---
layout: post
permalink: maven/upload-jar-file-to-maven-central
title: Upload JAR file to Maven Central
excerpt: 'In this article, I will share with you how I have uploaded my first JAR file to Maven Central'
keywords: publish jar file, publish jar file maven central
tags: java maven
---

## Introduction

Uploading a JAR file to the Maven central repository makes it available to anyone using Maven to manage dependencies for their Java project and here are the steps that I went through to upload my first JAR file:

## 1. Create maven projet to upload

Here is the example of maven project that I used for this article:

<p class="code-tabs"></p>

- HelloMaven.java

  ```java
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

    <properties>
      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      <maven.compiler.source>1.8</maven.compiler.source>
      <maven.compiler.target>1.8</maven.compiler.target>
      <junit.version>4.11</junit.version>
      <maven-source-plugin.version>2.2.1</maven-source-plugin.version>
      <maven-javadoc-plugin.version>2.9.1</maven-javadoc-plugin.version>
      <maven-gpg-plugin.version>1.5</maven-gpg-plugin.version>
    </properties>

    <licenses>
      <license>
        <name>The Apache License, Version 2.0</name>
        <url>http://www.apache.org/licenses/LICENSE-2.0.txt</url>
      </license>
    </licenses>

    <developers>
      <developer>
        <name>Ahmed HENTETI</name>
        <email>ahmad.henteti@gmail.com</email>
        <organization>com.github.ahenteti</organization>
        <organizationUrl>https://github.com/ahenteti/hello-maven</organizationUrl>
      </developer>
    </developers>

    <scm>
      <connection>scm:git:git://github.com/ahenteti/hello-maven.git</connection>
      <developerConnection>scm:git:ssh://github.com:ahenteti/hello-maven.git</developerConnection>
      <url>https://github.com/ahenteti/hello-maven</url>
    </scm>

    <distributionManagement>
      <snapshotRepository>
        <id>ossrh</id>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
      </snapshotRepository>
      <repository>
        <id>ossrh</id>
        <url>https://s01.oss.sonatype.org/service/local/staging/deploy/maven2</url>
      </repository>
    </distributionManagement>

    <dependencies>
      <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>${junit.version}</version>
        <scope>test</scope>
      </dependency>
    </dependencies>

    <build>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-source-plugin</artifactId>
          <version>${maven-source-plugin.version}</version>
          <executions>
            <execution>
              <id>attach-sources</id>
              <goals>
                <goal>jar-no-fork</goal>
              </goals>
            </execution>
          </executions>
        </plugin>

        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-javadoc-plugin</artifactId>
          <version>${maven-javadoc-plugin.version}</version>
          <executions>
            <execution>
              <id>attach-javadocs</id>
              <goals>
                <goal>jar</goal>
              </goals>
            </execution>
          </executions>
        </plugin>

        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-gpg-plugin</artifactId>
          <version>${maven-gpg-plugin.version}</version>
          <executions>
            <execution>
              <id>sign-artifacts</id>
              <phase>verify</phase>
              <goals>
                <goal>sign</goal>
              </goals>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>

  </project>
  ```

## 2. Create a ticket in JIRA

For this, we need to create a [JIRA account](https://issues.sonatype.org/secure/Signup!default.jspa) and create [New Project](https://issues.sonatype.org/secure/CreateIssue.jspa?issuetype=21&pid=10134) issue in JIRA.
![](/assets/upload-jar-file-to-maven-central/create-new-project-ticket.png)

## 3. Deploy to OSSRH Staging repositories

Before deploying our JAR file, we need to install [GnuPG](https://central.sonatype.org/pages/working-with-pgp-signatures.html) to generate key pair (private and public keys) to sign the JAR file we want to upload:

Here is the command to generate a key pair using gpg:

```
gpg --keyserver hkp://pool.sks-keyservers.net --send-keys C6EED57A
```

To accelerate the process of distributing our key, we can export our public key using the following command and upload it manually to the [GPG Key Server](https://keyserver.ubuntu.com/)

```
gpg --export -a --output myname-key.asc address@email.com
```

Once our key is uploaded, we can execute `mvn clean deploy` on the root of our maven projet to deploy our JAR file to [OSSRH Staging repositories](https://s01.oss.sonatype.org/#stagingRepositories)

![staging-repositories.png](/assets/upload-jar-file-to-maven-central/staging-repositories.png)

## 4. Deploy to the Central Repository

After a successful deployment to OSSRH your components are stored in a temporary repository and in order to get these components published you will have to [release](https://central.sonatype.org/pages/releasing-the-deployment.html) them. After a few moments, you can find your JAR in [Maven Central](https://search.maven.org/) :)

![maven-repo.png](/assets/upload-jar-file-to-maven-central/maven-repo.png)

Congratulation, our JAR file is now available on Maven Central and any one can use it by declaring it as dependency to their projects

```xml
<dependency>
  <groupId>com.github.ahenteti</groupId>
  <artifactId>hello-maven</artifactId>
  <version>1.0</version>
</dependency>
```
