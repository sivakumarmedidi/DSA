# Strings

## INTRO

Strings - Impl different in different prog languages
String - Sequence of chars

C program Char - 8-bit integer, supports 7-bit ASCII. Can represent max of 256 chars (8-bit) 

Java program Char - 16-bit unsigned integer, supports 16-bit unicode

## STRING IN JAVA
- Immutable
- Find length with `.length`
- Find a char at ith position with `.charAt(i)`
- Substring extraction with `.substring(i, j)` -> **Time Comp O(1)**
- Concat -> **Not O(1)**

```
public final class String implements Comparable<String>
{
    private char[] value;
    private int offset; // ensures substring to O(1)
    private int length;
    private int hash; // Calculated while init

    public int length() {
        return length;
    }

    public char charAt(int i) {
        return value[offset + i];
    }

    private String(int offset, int length, char[] value) {
        this.offset = offset;
        this.length = length;
        this.value = value;
    }

    public String substring(int from, int to) {
        return new String(offset + from, to - from, value)
    }
}

```