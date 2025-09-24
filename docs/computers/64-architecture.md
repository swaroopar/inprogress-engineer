# 64 Bit Architecture

64-bit architecture refers to a computer architecture that uses 64 bits to represent data and memory addresses.

This means, the CPU also have registers with size 64 bits.
Using this, the CPU can hold 64 bit addresses.
This in turn means, the RAM can be large enough which can be addressed using 64 bits.

:::info what's 64 in x86-64 systems
64 here defines the number of bits used to access the memory address.
With 64 bits, 16Exabits of memory can be accessed. No computer today has a RAM of this size.
:::

## Word Size

This also refers to the word size of CPU.
Word sizes refer to the number of bits the CPU can work on at a time.

:::important maximum possible size
It represents the maximum possible size of bits the CPU can handle at a time.
It's left to the applications to either fully use it or no.
In case of Java, for example if one byte represents a boolean value,
the rest of the bits is simply set to zero.
:::
