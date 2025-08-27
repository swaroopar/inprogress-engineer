# Byte Data Type

In Java, Byte is a data that represents an 8 bit signed integer.
It can hold values from -128 to 128.

:::important Its the smallest int possible
Other integer types in Java include short (16 bit), int (32 bit), and long (64 bit).
This is the one takes the lease memory space.
:::

## Byte Arrays

Data from file is read as byte arrays.
When directly used, they are just byte values.
Byte arrays can be converted to other data types as needed.
In such cases, the bytes in the array are interpreted according to the target data type.

For example, if we say that the byte array contains UTF-8 character set data,
then two bytes are processed together to translate it into a single unicode character.

:::warning byte is an integer
Even though byte is an integer data type,
it can be used to represent binary data.
This makes it a possibility to represent any data since it's all binary at the lowest level.
:::
