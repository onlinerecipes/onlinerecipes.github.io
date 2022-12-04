---
layout: post
permalink: java/sorted-map-guide
title: 'Java SortedMap Guide'
excerpt: 'In this article, we are going to discover the Java SortedMap interface and how we can use it in our Java programs'
tags: java map
---

## Introduction

The SortedMap is a subtype of the Map interface. It behaves like a normal Map with the addition that the SortedMap keys are ordered using their natural ordering or by a Comparator typically provided at SortedMap creation time.

```java
public interface SortedMap<E> extends Map<E>
```

All keys inserted into a SortedMap must implement the Comparable interface or be accepted by the specified comparator. Therefore, when you add an key to a SortedMap, you cannot specify its position. The position of the inserted key is determined by its natural order or by the provided Comparator.

## SortedMap Methods

{:.method-signature}

```java
Comparator<? super K>   comparator()
```

Returns the comparator used to order the keys in this map, or null if this map uses the natural ordering of its keys.

{:.method-signature}

```java
Set<Map.Entry<K,V>>     entrySet()
```

Returns a Set view of the mappings contained in this map.

{:.method-signature}

```java
K                       firstKey()
```

Returns the first (lowest) key currently in this map.

{:.method-signature}

```java
SortedMap<K,V>          headMap(K toKey)
```

Returns a view of the portion of this map whose keys are strictly less than toKey.

{:.method-signature}

```java
Set<K>                  keySet()
```

Returns a Set view of the keys contained in this map.

{:.method-signature}

```java
K                       lastKey()
```

Returns the last (highest) key currently in this map.

{:.method-signature}

```java
SortedMap<K,V>          subMap(K fromKey, K toKey)
```

Returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive.

{:.method-signature}

```java
SortedMap<K,V>          tailMap(K fromKey)
```

Returns a view of the portion of this map whose keys are greater than or equal to fromKey.

{:.method-signature}

```java
Collection<V>           values()
```

Returns a Collection view of the values contained in this map.

## Examples

All primitive type wrapper classes as well as the String class implement the Comparable interface, so they can be used normally in SortedMap. In following examples, we are going to create a User class that will be used in our examples.

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

        SortedMap<User, Integer> users = new TreeMap<>();
        users.put(u1, 10000);
        users.put(u2, 19000);
        users.put(u3, 20000);
        users.put(u4, 25000);

        for (Map.Entry<User, Integer> entry : users.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```
Ber Quinlan -> 20000
Cwrig Udo -> 25000
Ferrant Howlen -> 19000
Kyle Wilson -> 10000
```

## Using Custom Comparator

Supposing that we want to obtain a map of users sorted based on their lastName. For that we can use a SortedMap with custom Comparator that sorts users as required :

```java
public class Main {
    public static void main(String[] args) {
        User u1 = User.builder().firstName("Kyle").lastName("Wilson").build();
        User u2 = User.builder().firstName("Ferrant").lastName("Howlen").build();
        User u3 = User.builder().firstName("Ber").lastName("Quinlan").build();
        User u4 = User.builder().firstName("Cwrig").lastName("Udo").build();

        SortedMap<User, Integer> users = new TreeMap<>(Comparator.comparing(User::getLastName));
        users.put(u1, 10000);
        users.put(u2, 19000);
        users.put(u3, 20000);
        users.put(u4, 25000);

        for (Map.Entry<User, Integer> entry : users.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```
Ferrant Howlen -> 19000
Ber Quinlan -> 20000
Cwrig Udo -> 25000
Kyle Wilson -> 10000
```

## Using headMap method

The headMap() method takes a parameter that acts as a delimiter for what elements gets included in the returned head map. All elements with a key that is smaller than the parameter passed to the headMap() method will be included in the returned map. Here is an example of obtaining a head map from a SortedMap via its headMap() method :

```java
public class Main {
    public static void main(String[] args) {
        SortedMap<String, String> sortedMap = new TreeMap<>();
        sortedMap.put("a", "1");
        sortedMap.put("c", "3");
        sortedMap.put("e", "5");
        sortedMap.put("d", "4");
        sortedMap.put("b", "2");

        SortedMap<String, String> headMap = sortedMap.headMap("c");

        for (Map.Entry<String, String> entry : headMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```
a -> 1
b -> 2
```

## Using tailMap method

The tailMap() method takes a parameter that acts as a delimiter for what elements gets included in the returned head map. All elements with a key that is greater than the parameter passed to the tailMap() method will be included in the returned map. Here is an example of obtaining a head map from a SortedMap via its tailMap() method :

```java
public class Main {
    public static void main(String[] args) {
        SortedMap<String, String> sortedMap = new TreeMap<>();
        sortedMap.put("a", "1");
        sortedMap.put("c", "3");
        sortedMap.put("e", "5");
        sortedMap.put("d", "4");
        sortedMap.put("b", "2");

        SortedMap<String, String> headMap = sortedMap.tailMap("d");

        for (Map.Entry<String, String> entry : headMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
```

Run the example above and you will get the following result :

{:.wln}

```
d -> 4
e -> 5
```

## Conclusion

In this article, we have discovered the Java SortedMap API and we hope you find it useful :)
