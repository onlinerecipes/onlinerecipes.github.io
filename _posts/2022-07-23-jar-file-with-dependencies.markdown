---
layout: post
permalink: java/jar-file-with-dependencies
title: 'JAR file with dependencies'
excerpt: 'In this article, we are going to discover how to execute JAR file with dependencies'
tags: java jar maven
---

## Introduction

In this article, we are going to discover how to execute JAR file with dependencies. In fact, when working on a Java application using maven for building and managing dependencies, running the application directly from IntelliJ IDE, it works perfectly. But when we try to run the generated jar file using the terminal, we obtain the NoClassDefFoundError error. This is because the generated jar file doesn't contain the dependencies declared in the pom.xml file and in this article we are going to discover 2 solution base on two different maven plugins

## Maven Assembly Plugin

The Apache Maven Assembly Plugin allows us to specify that our application's JAR file should include its dependencies and here is a configuration example of this plugin in the pom.xml file:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-assembly-plugin</artifactId>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
            <configuration>
                <archive>
                <manifest>
                    <mainClass>
                        com.github.ahenteti.executablejar.Main
                    </mainClass>
                </manifest>
                </archive>
                <descriptorRefs>
                    <descriptorRef>jar-with-dependencies</descriptorRef>
                </descriptorRefs>
            </configuration>
        </execution>
    </executions>
</plugin>
```

The main goal in the assembly plugin is the [single](https://maven.apache.org/plugins/maven-assembly-plugin/single-mojo.html) goal and as we can see in the configuration example, we need to provide the main class of our Java application. To create our executable Jar, we execute the following command: `mvn clean package` which will generate **{project-name}-{project-version}-with-dependencies.jar** jar file inside the maven **target** output folder. To run our jar file we can execute the following command:

```sh
java -jar target/{project-name}-{project-version}-with-dependencies.jar
```

## Maven Dependency Plugin

Another solution is to use the Maven Dependency Plugin to generate all dependencies in a separate directory that should be used in the classpath parameter when executing the JAR file. Here is a configuration example of this plugin in the pom.xml file:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-dependency-plugin</artifactId>
    <executions>
        <execution>
            <id>copy-dependencies</id>
            <phase>prepare-package</phase>
            <goals>
                <goal>copy-dependencies</goal>
            </goals>
            <configuration>
                <outputDirectory>
                    ${project.build.directory}/libs
                </outputDirectory>
            </configuration>
        </execution>
    </executions>
</plugin>
```

To run our jar file we can execute the following command:

```sh
java -cp "target/libs/*;target/{project-name}-{project-version}.jar" com.github.ahenteti.executablejar.Main
```

## Conclusion

In this article, we have discovered how to create executable JAR with dependencies using maven we hope you find it useful :)
