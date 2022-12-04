---
layout: post
permalink: java/thread-local-guide
title: 'ThreadLocal Guide'
excerpt: 'In this article, we are going to discover the Java ThreadLocal class and how we can use it in our Java programs'
tags: java concurrency
---

## Introduction

The Java ThreadLocal class gives us the ability to create variables that can only be read and written by the same Thread. So, even if two threads are executing the same code, and the code has a reference to the same ThreadLocal variable, the two threads cannot see each other's ThreadLocal variables which is a simple way to make code thread-safe. ThreadLocal instances are typically private static fields in classes that wish to associate state with a thread (e.g., User ID, Transaction ID, ...)

```java
private static ThreadLocal<Integer> userIdThreadLocal = new ThreadLocal<>();
```

Next, when we want to use this value from a thread, we only need to call the ThreadLocal get() or set() method. We can imagine that ThreadLocal stores data inside of a map with the thread as the key. As a result, when we call a get() method on the userIdThreadLocal, we will get the value for the requesting thread:

```java
userIdThreadLocal.set(1);
Integer user = userIdThreadLocal.get();
```

## ThreadLocal Methods

{:.method-signature}

```java
static <S> ThreadLocal<S>   withInitial(Supplier<? extends S> supplier)
```

Creates a thread local variable.

{:.method-signature}

```java
protected T                 initialValue()
```

Returns the current thread's "initial value" for this thread-local variable.

{:.method-signature}

```java
T                           get()
```

Returns the value in the current thread's copy of this thread-local variable.

{:.method-signature}

```java
void                        remove()
```

Removes the current thread's value for this thread-local variable.

{:.method-signature}

```java
void                        set(T value)
```

Sets the current thread's copy of this thread-local variable to the specified value.

## Initial ThreadLocal Value

It is possible to set an initial value for a ThreadLocal which will be returned the first time the get() method is called even before the set() method is called. We have two options for specifying an initial value for a ThreadLocal:

### Overriding initialValue()

The first way to specify an initial value for a Java ThreadLocal variable is to create a subclass of ThreadLocal which overrides its initialValue() method and here is an example that creates an anonymous subclass of ThreadLocal which overrides the initialValue() method:

```java
private ThreadLocal<String> threadLocal = new ThreadLocal<String>() {
    @Override
    protected String initialValue() {
        return UUID.randomUUID().toString();
    }
};
```

### Providing a Supplier implementation

The second method is to use the ThreadLocal static factory method withInitial(Supplier) by passing a Supplier interface implementation as parameter. This Supplier implementation supplies the initial value for the ThreadLocal. Here is an example of creating a ThreadLocal using its withInitial() static factory method :

```java
ThreadLocal<String> threadLocal = ThreadLocal.withInitial(new Supplier<String>() {
    @Override
    public String get() {
        return UUID.randomUUID().toString();
    }
});
```

## ThreadLocals and Thread Pools

We should be extra careful when we are using ThreadLocals and thread pools together. The technique of thread pooling allows threads to be reused to reduce thread creation overhead. Each task that enters the pool expects to see ThreadLocal objects in their initial, default state. However, when ThreadLocal objects are modified on a thread that is subsequently made available for reuse, the next task executing on the reused thread sees the state of the ThreadLocal objects as modified by the previous task that executed on that thread.

Programs must ensure that each task that executes on a thread from a thread pool sees only correctly initialized instances of ThreadLocal objects. The good news is that it's possible to extend the ThreadPoolExecutor class and provide a custom hook implementation for the beforeExecute() and afterExecute() methods. Therefore, we can extend the ThreadPoolExecutor class and remove the ThreadLocal variable in the afterExecute() method:

```java
public class ThreadLocalAwareThreadPoolExecutor extends ThreadPoolExecutor {
    @Override
    protected void afterExecute(Runnable r, Throwable t) {
        // removing the current thread's variable
    }
}
```

## InheritableThreadLocal

The InheritableThreadLocal class extends ThreadLocal to provide inheritance of values from parent thread to child thread: when a child thread is created, the child receives initial values for all inheritable thread-local variables for which the parent has values. Normally the child's values will be identical to the parent's.

Inheritable thread-local variables are used in preference to ordinary thread-local variables when the per-thread-attribute being maintained in the variable (e.g., User ID, Transaction ID, ...) must be automatically transmitted to any child threads that are created. Here is an example to illustrate the benefits of using InheritableThreadLocal class :

## Using ThreadLocal

```java
class ParentThread extends Thread {
    public static ThreadLocal<String> parentThreadLocal = new ThreadLocal<>();

    public void run() {
        parentThreadLocal.set("parent data");
        System.out.println("Parent ThreadLocal Value: " + parentThreadLocal.get());
        new ChildThread().start();
    }
}

class ChildThread extends Thread {
    public void run() {
        System.out.println("Child ThreadLocal Value: " + ParentThread.parentThreadLocal.get());
    }
}

class ThreadLocalDemo {
    public static void main(String[] args) {
        new ParentThread().start();
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```sh
Parent ThreadLocal Value: parent data
Child ThreadLocal Value: null
```

## Using InheritableThreadLocal

```java
class ParentThread extends Thread {
    public static InheritableThreadLocal<String> parentThreadLocal = new InheritableThreadLocal<>();

    public void run() {
        parentThreadLocal.set("parent data");
        System.out.println("Parent InheritableThreadLocal Value: " + parentThreadLocal.get());
        new ChildThread().start();
    }
}

class ChildThread extends Thread {
    public void run() {
        System.out.println("Child InheritableThreadLocal Value: " + ParentThread.parentThreadLocal.get());
    }
}

class ThreadLocalDemo {
    public static void main(String[] args) {
        new ParentThread().start();
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```sh
Parent InheritableThreadLocal Value: parent data
Child InheritableThreadLocal Value: parent data
```

## Conclusion

In this article, we have discovered the Java ThreadLocal class and we hope you find it useful :)
