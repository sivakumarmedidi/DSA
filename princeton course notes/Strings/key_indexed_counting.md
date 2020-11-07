# Key Indexed Couting

- Sorting in general takes NlogN times to compute. But this is the case when depend on compareTo. We can do better(**O(N)**) if we dont need to compare.
- This happens when we use, for example a small integer or a char, as a key to sort items. If it is the case, we can directly use the key itself as the array index. Duplicates for the same key can be handled by key-indexed-counting

**O(N)**
```java
// R is radix
public static char[] kic(char[] a) {
    int[] counts = new int[R+1];
    char[] aux = new char[a.length];

    //Collecting the count of each char type
    for(int i = 0; i < a.lenght; i++) {
        counts[a[i] + 1]++;
    }

    //assign the indices from where a particular char should start from
    for(int i = 0; i < R; i++) {
        counts[i+1] += counts[i];
    }

    for(int i = 0; i < a.length; i++) {
        aux[counts[a[i]]++] = a[i];
    }

    for(int i = 0; i < a.length; i++) {
        a[i] = aux[i];
    }
}


```