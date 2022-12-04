---
layout: post
permalink: java/collections-api-guide
title: 'Java Collections API Guilde'
excerpt: 'In this article, we are going to discover the Java Collections API and how we can use it in our Java programs'
tags: java collections
---

## Introduction

Java Collections API is a collection of interfaces and classes that help store, order, and process a group of items efficiently. This API contains several useful classes which in turn contain several methods which makes programming simple and easy.

## Interfaces

The Java Collections Interfaces are divided into two categories: _Collection_ & _Map_

![](/assets/java-collections-guide/interface-hierarchy.svg)

- **Collection** represents a group of items where duplication may be allowed.
- **Set** represents a collection that remove duplicate items.
- **List** represents a collection that allows duplication.
- **Map** stores (key, value) pairs and each key has a single and unique value

## List Classes

The most common classes that implements the `List` interface are: `LinkedList` and `ArrayList` and here are the most common methods that we can find in this type of collection :

| Methods  | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| add      | Appends the specified element to the end of this list                      |
| remove   | Removes the first occurrence of the specified element from this list       |
| get      | Returns the element at the specified position in this list                 |
| size     | Returns the number of elements in this list                                |
| contains | Returns true if this list contains the specified element                   |
| clear    | Removes all of the elements from this list                                 |
| sort     | Sorts this list according to the order induced by the specified Comparator |

Here is a code example using the `List` interface

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Item 1");
        list.add("Item 2");
        list.add("Item 3");
        list.remove("S3");

        for (int i = 0; i < list.size(); i++) {
            System.out.println("Item at position " + i + " = " + list.get(i));
        }

        // Output:
        // Item at position 0 = Item 1
        // Item at position 1 = Item 2
    }
}
```

## Set Classes

`HashSet` is the most common classe that implements the `Set` interface and here are the most common methods that we can find in this type of collection :

| Methods  | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| add      | Adds the specified element to this set if it is not already present |
| remove   | Removes the specified element from this set if it is present        |
| size     | Returns the number of elements in this set                          |
| contains | Returns true if this set contains the specified element             |
| clear    | Removes all of the elements from this set                           |

As we can see, the `get` and `sort` methods are not present in the `Set` interface and here is a code example using this interface

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Item 1");
        set.add("Item 2");
        set.add("Item 2");

        for (String s : set) {
            System.out.println(s);
        }

        // Output:
        // Item 1
        // Item 2
    }
}
```

## Map Classes

The most common classes that implements the `Map` interface are: `HashMap` and `Hashtable` and here are the most common methods that we can find in this type of collection :

| Methods       | Description                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| size          | Returns the number of key-value mappings in this map                                                       |
| containsKey   | Returns true if this map contains a mapping for the specified key                                          |
| containsValue | Returns true if this map maps one or more keys to the specified value                                      |
| get           | Returns the value to which the specified key is mapped or null if this map contains no mapping for the key |
| put           | Associates the specified value with the specified key in this map                                          |
| remove        | Removes the mapping for a key from this map if it is present                                               |
| clear         | Removes all of the mappings from this map                                                                  |

Here is a code example using the `Map` interface

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("Key1", "Value1");
        map.put("Key2", "Value2");
        map.put("Key3", "Value3");
        map.remove("Key3");

        for (Map.Entry entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Output:
        // Key1: Value1
        // Key2: Value2
    }
}
```

## Conclusion

In this article, we have discovered the Java Collections API and we hope you find it useful :)
