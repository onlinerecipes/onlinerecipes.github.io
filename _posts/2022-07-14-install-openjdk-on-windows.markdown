---
layout: post
permalink: java/install-openjdk-on-windows
title: 'Install OpenJDK on Windows'
excerpt: 'In this article, I will show you step by step how to install OpenJDK on a Windows machine'
keywords: install java, install java windows, install openjdk, install openjdk windows
tags: java openjdk
---

## Introduction

In this article, I will show you step by step how to install OpenJDK on a Windows machine. First, we will download the JDK from the [OpenJDK](https://jdk.java.net/) official website and save it in a directory of our choice. Next we will see how to define the `JAVA_HOME` environment variable and update the `PATH` environment variable to add the `bin` directory of the JDK. Finally, we will test our installation by checking the Java version installed on our operating system.

## Download OpenJDK

For this, we need to go to the [OpenJDK](https://jdk.java.net/) official download page and choose the latest stable OpenJDK version available for Windows. At the time of writing this article, the latest version is OpenJDK 18.

<img data-gifffer="/assets/install-openjdk-on-windows/download-openjdk.gif" />

Once downloaded, unzip the file in a directory of your choice. In this article, we will use `C:\dev\tools\java\jdk-18.0.1.1`

<img data-gifffer="/assets/install-openjdk-on-windows/enregistrer-openjdk.gif" />

## Update environment variables

The last step is to update the environment variables to be able to use Java commands like `java` and `javac` from any directory. For that we need to:

- Set the `JAVA_HOME` environment variable to be equal to the directory where we have saved the JDK. In our case it is the directory: `C:\dev\tools\java\jdk-18.0.1.1`
  <img data-gifffer="/assets/install-openjdk-on-windows/java-home-variable.gif" />

- <p style="margin-bottom: 0.3rem">Update the `PATH` environment variable to the `bin` directory of the JDK</p>
  <div class="info">On Windows, we can use <b>%VARIABLE_NAME%</b> syntax to reference an environnement variable. So, we can use <b>%JAVA_HOME%/bin</b> as the bin directory of the JDK</div>
  <img data-gifffer="/assets/install-openjdk-on-windows/path-variable.gif" />

## Installation Check

To verify our installation, we can execute the command `java -version` on Windows terminal which allows us to check the Java version installed on our operating system

```shell
> java -version
openjdk 18.0.1.1 2022-04-22
OpenJDK Runtime Environment (build 18.0.1.1+2-6)
OpenJDK 64-Bit Server VM (build 18.0.1.1+2-6, mixed mode, sharing)
```

Congratulations, this output means that Java is properly installed on your operating system
