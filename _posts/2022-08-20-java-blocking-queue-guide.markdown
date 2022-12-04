---
layout: post
permalink: java/blocking-queue-guide
title: 'BlockingQueue Guide'
excerpt: 'In this article, we are going to discover the Java BlockingQueue interface and how we can use it in our Java programs'
tags: java queue
---

## Introduction

BlockingQueue is a subtype of the Queue interface which provides additional operations that wait for the queue to become non-empty when retrieving an element, and wait for space to become available in the queue when storing an element.

```java
public interface BlockingQueue<E> extends Queue<E>
```

BlockingQueue methods come in four forms of handling operations that cannot be satisfied immediately but may be satisfied at some point in the future :

- one throws an exception
- the second returns either null or false depending on the operation
- the third blocks the current thread indefinitely until the operation can succeed
- and the fourth blocks for only a given maximum time limit before giving up

<div class="table-wrapper" markdown=1>

{:.nowrap}

|             | Throws exception | Returns false or null | Blocks      | Times out                    |
| ----------- | ---------------- | --------------------- | ----------- | ---------------------------- |
| **Insert**  | boolean add(e)   | boolean offer(e)      | void put(e) | boolean offer(e, time, unit) |
| **Remove**  | E remove()       | E poll()              | E take()    | E poll(time, unit)           |
| **Examine** | E element()      | E peek()              | N/A         | N/A                          |

</div>

## BlockingQueue Methods

{:.method-signature}

```java
boolean add(E e)
```

Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available. When using a capacity-restricted queue, it is generally preferable to use offer.

{:.method-signature}

```java
boolean offer(E e)
```

Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and false if no space is currently available. When using a capacity-restricted queue, this method is generally preferable to add(E), which can fail to insert an element only by throwing an exception.

{:.method-signature}

```java
void put(E e) throws InterruptedException
```

Inserts the specified element into this queue, waiting if necessary for space to become available.

{:.method-signature}

```java
boolean offer(E e, long timeout, TimeUnit unit) throws InterruptedException
```

Inserts the specified element into this queue, waiting up to the specified wait time if necessary for space to become available.

{:.method-signature}

```java
E take() throws InterruptedException
```

Retrieves and removes the head of this queue, waiting if necessary until an element becomes available.

{:.method-signature}

```java
E poll(long timeout, TimeUnit unit) throws InterruptedException
```

Retrieves and removes the head of this queue, waiting up to the specified wait time if necessary for an element to become available.

{:.method-signature}

```java
int remainingCapacity()
```

Returns the number of additional elements that this queue can ideally (in the absence of memory or resource constraints) accept without blocking, or Integer.MAX_VALUE if there is no intrinsic limit.

{:.method-signature}

```java
boolean remove(Object o)
```

Removes a single instance of the specified element from this queue, if it is present. More formally, removes an element e such that o.equals(e), if this queue contains one or more such elements. Returns true if this queue contained the specified element (or equivalently, if this queue changed as a result of the call).

{:.method-signature}

```java
boolean contains(Object o)
```

Returns true if this queue contains the specified element. More formally, returns true if and only if this queue contains at least one element e such that o.equals(e).

{:.method-signature}

```java
int drainTo(Collection<? super E> c)
```

Removes all available elements from this queue and adds them to the given collection. This operation may be more efficient than repeatedly polling this queue. A failure encountered while attempting to add elements to collection c may result in elements being in neither, either or both collections when the associated exception is thrown. Attempts to drain a queue to itself result in IllegalArgumentException. Further, the behavior of this operation is undefined if the specified collection is modified while the operation is in progress.

## Example

The BlockingQueue is mainly designed to be used for producer-consumer queues. All its methods are thread-safe, however methods inherited from the Collection interface such as addAll, containsAll, retentionAll and removeAll are not necessarily thread-safe, it depends on the class that implements the BockingQueue interface.

A BlockingQueue does not support any kind of _close_ or _shutdown_ operation to indicate that no more items will be added. A common solution is for producers to insert final special object to the queue to notify the Consumer that this is the last object to be added to the queue.

![](/assets/java-blocking-queue-guide/producer-consumer-queue.svg)

<p class="code-tabs"></p>

- Producer

  ```java
  import java.util.concurrent.BlockingQueue;

  public class Producer implements Runnable {
      private static int serial = 1;

      private final String name;
      private final BlockingQueue<String> queue;

      public Producer(String name, BlockingQueue<String> queue) {
          this.name = name;
          this.queue = queue;
      }
      @Override
      public void run() {
          try {
              while (true) {
                  Thread.sleep(1000);
                  this.queue.put(this.produce());
              }
          } catch (InterruptedException ex) {
          }
      }
      private String produce() {
          System.out.println(name + " >> Create a new Object #" + serial++);
          return "Object #" + serial;
      }
  }
  ```

- Consumer

  ```java
  import java.util.concurrent.BlockingQueue;

  public class Consumer implements Runnable {
      private String name;
      private final BlockingQueue<String> queue;

      public Consumer(String name, BlockingQueue<String> queue) {
          this.name = name;
          this.queue = queue;
      }
      @Override
      public void run() {
          try {
              while (true) {
                  this.consume(queue.take());
              }
          } catch (InterruptedException ex) {
          }
      }
      private void consume(String object) {
          System.out.println(name + " >> Consume: " + object);
      }
  }
  ```

- Main

  ```java
  import java.util.concurrent.ArrayBlockingQueue;
  import java.util.concurrent.BlockingQueue;

  public class Main {
      public static void main(String[] args) {
          // Create a BlockingQueue with a capacity of 5.
          BlockingQueue<String> q = new ArrayBlockingQueue<>(5);
          Producer producer1 = new Producer("Producer 1", 2, q);
          Producer producer2 = new Producer("Producer 2", 1, q);
          Consumer consumer1 = new Consumer("Consumer 1", q);
          Consumer consumer2 = new Consumer("Consumer 2", q);
          Consumer consumer3 = new Consumer("Consumer 3", q);

          // Starting the threads
          new Thread(producer1).start();
          new Thread(producer2).start();
          new Thread(consumer1).start();
          new Thread(consumer2).start();
          new Thread(consumer3).start();
      }
  }
  ```

Run the example above and you will get the following result :

{:.wln}

```
Producer 2 >> Create a new Object #1
Consumer 1 >> Consume: Object #2
Producer 1 >> Create a new Object #2
Consumer 2 >> Consume: Object #3
Producer 2 >> Create a new Object #3
Consumer 3 >> Consume: Object #4
Producer 2 >> Create a new Object #4
Consumer 1 >> Consume: Object #5
Producer 1 >> Create a new Object #5
Consumer 2 >> Consume: Object #6
Producer 2 >> Create a new Object #6
Consumer 3 >> Consume: Object #7
...
```

## Conclusion

In this article, we have discovered the Java BlockingQueue API and we hope you find it useful :)
