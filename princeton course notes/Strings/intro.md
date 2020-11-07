# Intro

Strings - Impl different in different prog languages
String - Sequence of chars

C program Char - 8-bit integer, supports 7-bit ASCII. Can represent max of 256 chars (8-bit) 

Java program Char - 16-bit unsigned integer, supports 16-bit unicode

## Strings in Java

### String

- Immutable
- Find length with `.length`
- Find a char at ith position with `.charAt(i)`
- Substring extraction with `.substring(i, j)` -> **Time Comp O(1)**
- Concat -> **O(N)**

```java
public final class String implements Comparable<String>
{
    private char[] value;
    private int offset; // ensures substring to O(1)
    private int length;
    private int hash; // Calculated while init

    public int length() { // O(1)
        return length;
    }

    public char charAt(int i) { //O(1)
        return value[offset + i];
    }

    private String(int offset, int length, char[] value) {
        this.offset = offset;
        this.length = length;
        this.value = value;
    }

    public String substring(int from, int to) { O(1)
        return new String(offset + from, to - from, value);
    }

    public String concat(String string) { //O(N)
        int newStringLen = length + string.length();
        char[] newCharArray = new char[newStringLen];
        //Copy value, string into newCharArray
        return new String(0, newStringLen, newCharArray);
    }
}

```

### StringBuilder
- Immutable
- Implemented with Resizing char[] array and length

- length - O(1)
- charAt - O(1)
- substring - **O(N)**
- concat - **O(1)** amortized

*StringBuffer is similar but thread safe, so slow*

## Reverse Efficiently

- As there are many concats while doing it, better use StringBuilder**O(N)** instead of String**O(N^2)**

## Array of suffixes efficiently

- As it involves utilizing substring method, String**O(N)** is better than StringBuilder**O(N^2)**

```java
public static String[] suffixes(String s) {
    int N = s.length();
    String[] suffixes = new String[N];
    for(int i = 0; i < N; i++) {
        suffixes[i] = s.substring(i, N);
    }
    retuen suffixes;
}
```

**Summary** - Before working with strings in any prog lang, make sure to know internal implementation of string to write efficient code

## Length of longest common prefix

```java
public int lcp(String s1, String s2) {
    int N = Math.min(s1.length(), s2.length());
    for(int i = 0; i < N; i++) {
        if(s1.charAt(i) != s2.charAt(i)) {
            return i;
        }
    }

    return N;
}
```
*linear time in worst case , sublinear time in typical case where we compare only until a char is mismatching*

## Radix (Number of possible different chars in string)

name | radix
---- | -----
BINARY | 2
ASCII | 128
Extended ASCII | 256
UNICODE 16 | 65536

