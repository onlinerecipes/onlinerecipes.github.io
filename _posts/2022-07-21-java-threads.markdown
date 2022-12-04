---
layout: post
permalink: java/java-threads
title: 'Java Threads'
excerpt: 'In this article, we are going to discover Java Threads and how we can use them in Java'
tags: java threads
---

## Introduction

The Java Virtual Machine (JVM) allows us to run several treatments in parallel. These treatments are managed by threads of control, or more simply Threads. They are light processes that shares a set of data and resources within the JVM.

<p class="mb-05">Each Thread is associated to :</p>

- An object which determines the code that is executed by the thread. It must implement the [`Runnable`](https://download.java.net/java/early_access/loom/docs/api/java.base/java/lang/Runnable.html) interface.

- Another object that controls the thread and represents it to the objects of the application. It must be an instance of the [`Thread`](https://download.java.net/java/early_access/loom/docs/api/java.base/java/lang/Thread.html) class or its child class.

## Thread Instanciation

Creating a Thread in Java can be done in two ways in Java

### Using Thread class

In this approach, we are going to create new class the extends the `Thread` class and overrides the `run()` method and here is an example of this approach :

```java
class ThreadExample extends Thread {
    public void run() {
        System.out.println("task example");
    }

    public static void main(String args []) {
        ThreadExample thread = new ThreadExample();
        thread.start();
    }
}
```

### Using Runnable interface

In this approach, we are going to create new class that implements the `Runnable` interface that implements the `run()` method and passe it to the `Thread` constructor. Here is an example of this approach :

```java
class RunnableImpl implements Runnable {
    public void run() {
        System.out.println("task example" );
    }

    public static void main(String args []) {
        Runnable runnable = new RunnableImpl();
        Thread thread = new Thread(runnable);
        thread.start();
    }
}
```

## Thread life cycle

To start a Thread, we need to call its `start()` method and to stop it, we can call its `stop()` method. The Runnable code runs in parallel to the code who started the thread. An error would be to call the run() method directly: it would be executed by the thread that called it and not by a new thread.

Thread status is encapsulated in the `Thread.State` enumeration

| Status     | Description                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| NEW        | The thread is not started yet. No system resources are assigned to it yet. Only thread status change methods `start()` and `stop()` can be invoked |
| RUNNABLE   | The thread is running: its `start()` method has been invoked                                                                                       |
| BLOCKED    | The thread is waiting to get a monitor that is already owned by another thread                                                                     |
| WAITING    | The thread is waiting for an action from another thread or for the duration specified in the parameter of the `sleep()` method to be reached.      |
| TERMINATED | The thread has finished executing                                                                                                                  |

The diagram below illustrates the different states of a thread and the actions that provide a transition between these states:

![](/assets/java-threads/thread-life-cycle.svg)

## Conclusion

In this quick tutorial, we have discovered Java Threads and we hope you find it useful :)
