---
layout: post
permalink: java/immutable-objects
title: 'Java Immutable Objects'
excerpt: 'In this article, we are going to discover Java Immutable Objects and how we can create them in Java'
tags: java
---

## Introduction

An object is considered **Immutable** if its state cannot be changed after it is constructed. Immutable objects are particularly useful in concurrent applications: since their state cannot be changed, they cannot be corrupted by thread interference or observed in an inconsistent state.

## Rules

<p class="mb-05">To create an Immutable Object, we should respect the following rules</p>

- The class must be declared as final so child classes cannot be created
- All attributes must be private so that direct access is not permitted
- All attributes must be final so we cannot modify their value after the object is created
- A parameterized constructor must initialize all class properties with deep-copy so that no modification can be done using object reference
- Deep copying of objects should be done in getter methods to return a copy rather than returning the actual object reference

## Example

```java
final public class ImmutableRGBColor {
    final private int red;
    final private int green;
    final private int blue;

    private void check(int red, int green, int blue) {
        if (red < 0 || red > 255 || green < 0 || green > 255 ||blue < 0 || blue > 255) {
            throw new IllegalArgumentException();
        }
    }

    public ImmutableRGBColor(int red, int green, int blue) {
        check(red, green, blue);
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    public int getRGB() {
        return ((red << 16) | (green << 8) | blue);
    }

    public ImmutableRGBColor invert() {
        return new ImmutableRGBColor(255 - red, 255 - green, 255 - blue);
    }
}
```

As we can see in this example, no **setter** methods has been defined and the **invert** method returns a new `ImmutableRGBColor` object and do not change the state of the current RGB Color.

## Conclusion

In this quick tutorial, we have discovered Java Immutable Objects and we hope you find it useful :)
