# Bit Masking

:::important mental model using the name
The word **mask** in the name helps to understand and remember the concept.

Here the word **mask** means, how a bit pattern can be used to mask only certain bits
and thereby we extract the values from the bit positions of interest.
:::

## Why bit masking is needed

Bit masking avoids the need to parse an entire bit sequence to extract any data.
This is compute expensive.

For example, file permissions are stored for all 3 scopes - owner, group, others.
Without bit mask concept, to get a permission of a specific scope the client must parse the entire permission bit sequence.

With bitmask, AND operation is applied between the actual bits and the bit mask.
The bitmask in this case will have 1's at bit positions of interest.
Thereby the end result can be then used to read the values of bits of interest directly.
:::
