---
layout: post
permalink: java/sorted-set-guide
title: 'Java SortedSet Guide'
excerpt: 'In this article, we are going to discover the Java SortedSet interface and how we can use it in our Java programs'
tags: java set
---

## Introduction

The SortedSet is a subtype of the Set interface. It behaves like a normal Set with the addition that the SortedSet elements are ordered using their natural ordering or by a Comparator typically provided at SortedSet creation time.

```java
public interface SortedSet<E> extends Set<E>
```

All elements inserted into a SortedSet must implement the Comparable interface or be accepted by the specified comparator. Therefore, when you add an element to SortedSet, you cannot specify its position. The position of the inserted element is determined by its natural order or by the provided Comparator.

## SortedSet Methods

{:.method-signature}

```java
Comparator<? super E>   comparator()
```

Returns the comparator used to order the elements in this set, or null if this set uses the natural ordering of its elements.

{:.method-signature}

```java
E                       first()
```

Returns the first (lowest) element currently in this set.

{:.method-signature}

```java
SortedSet<E>            headSet(E toElement)
```

Returns a view of the portion of this set whose elements are strictly less than toElement.

{:.method-signature}

```java
E                       last()
```

Returns the last (highest) element currently in this set.

{:.method-signature}

```java
default Spliterator<E>  spliterator()
```

Creates a Spliterator over the elements in this sorted set.

{:.method-signature}

```java
SortedSet<E>            subSet(E fromElement, E toElement)
```

Returns a view of the portion of this set whose elements range from fromElement, inclusive, to toElement, exclusive.

{:.method-signature}

```java
SortedSet<E>            tailSet(E fromElement)
```

Returns a view of the portion of this set whose elements are greater than or equal to fromElement.

## Examples

All primitive type wrapper classes as well as the String class implement the Comparable interface, so they can be used normally in SortedSet. In following examples, we are going to create a User class that will be used in our examples. This class will be used in Sets, so it must override equals() and hashCode() methods.

```java
@Getter
@Setter
@ToString
@AllArgsConstructor
public class User implements Comparable<User> {

    private String firstName;
    private String lastName;

    @Override
    public int compareTo(User user) {
        if (firstName.equals(user.getFirstName())) {
            return lastName.compareTo(user.lastName);
        }
        return firstName.compareTo(user.firstName);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(firstName, user.firstName) && Objects.equals(lastName, user.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName);
    }
}
```

## Using Comparable Elements

```java
public class Main {
    public static void main(String[] args) {
        User u1 = User.builder().firstName("Kyle").lastName("Wilson").build();
        User u2 = User.builder().firstName("Ferrant").lastName("Howlen").build();
        User u3 = User.builder().firstName("Ber").lastName("Quinlan").build();
        User u4 = User.builder().firstName("Cwrig").lastName("Udo").build();

        SortedSet<User> users = new TreeSet<>();
        users.add(u1);
        users.add(u2);
        users.add(u3);
        users.add(u4);

        for (User user : users) {
            System.out.println(user);
        }
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```
Ber Quinlan
Cwrig Udo
Ferrant Howlen
Kyle Wilson
```

## Using Custom Comparator

Supposing that we want to obtain a set of users sorted based on their lastName. For that we can use a SortedSet with custom Comparator that sorts users as required :

```java
public class Main {
    public static void main(String[] args) {
        User u1 = User.builder().firstName("Kyle").lastName("Wilson").build();
        User u2 = User.builder().firstName("Ferrant").lastName("Howlen").build();
        User u3 = User.builder().firstName("Ber").lastName("Quinlan").build();
        User u4 = User.builder().firstName("Cwrig").lastName("Udo").build();

        SortedSet<User> users = new TreeSet<>(Comparator.comparing(User::getLastName));
        users.add(u1);
        users.add(u2);
        users.add(u3);
        users.add(u4);

        for (User user : users) {
            System.out.println(user);
        }
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```
Ferrant Howlen
Ber Quinlan
Cwrig Udo
Kyle Wilson
```

## Conclusion

In this article, we have discovered the Java SortedSet API and we hope you find it useful :)
