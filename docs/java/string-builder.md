# String Builder

It's always known that the strings in Java are immutable.
This is exactly why string concatenation or modification is very compute expensive,
since it will always create new object and copy data from old object to new object.

## StringBuilder Class

It exposes the underlying character array and allows modification of the characters directly.
This avoids creating new string objects and copying data, thus improving performance.

:::important size of StringBuilder array
Since string builder uses an underlying character array, it has a capacity.
When the capacity is exceeded, a new larger array is created and the data is copied over.

Hence while using StringBuilder, knowing the initial size helps control the Big O of the operations.
:::

## String Pools

JVM has a string pool, but this is only for strings that are created using **string literals**.

During class loading, all string literals in the code base are added to the string pool.
If a string literal is already in the pool, the reference to the existing string object is returned
instead of creating a new string object.

:::warning strings created at runtime
For strings that are created at runtime, the string pool isn't used at all.

We can still add strings to the string pool manually using the `intern()` method.
Otherwise the pool at runtime is only used when the already declared string literals are referenced.
:::
