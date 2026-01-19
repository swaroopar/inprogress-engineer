# Bit Manipulation

Bit manipulation involves the direct manipulation of bits within a binary representation of data.
It uses [boolean algebra](../mathematics/boolean-alegbra.md) operations for the same.

:::important bit vectors are very important
Bit vectors are nothing but an array of bits.
In all programming problems, we just use an integer to represent a bit vector
since integers or anything for that matter are just a sequence of bits.

Bit vectors are used in many solutions.
It's very useful to understand how data manipulation and extraction in bit vectors work.
:::

:::tip use of **1** as mask
In all the below steps, we use **1** as the mask.
This means it's an integer 1 where just last bit is set to 1.
We then use shift operators to move this 1 at different positions.
:::

<!-- markdownlint-disable MD013-->

| Purpose                    | Operation       | Expression            | What it Does            | Mental Model           |
| -------------------------- | --------------- | --------------------- | ----------------------- | ---------------------- |
| **Set a bit**              | OR `\|`         | `x \|= (1 << i)`      | Forces bit `i` to `1`   | “Turn ON this switch”  |
| **Clear a bit**            | AND + NOT `& ~` | `x &= ~(1 << i)`      | Forces bit `i` to `0`   | “Turn OFF this switch" |
| **Toggle a bit**           | XOR `^`         | `x ^= (1 << i)`       | Flips bit `i`           | “Flip the switch”      |
| **Check a bit**            | AND `&`         | `(x & (1 << i)) != 0` | Tests if bit `i` is `1` | “Is this switch ON?”   |
| **Extract a bit**          | Shift + AND     | `(x >> i) & 1`        | Gets value of bit `i`   | “Read this switch”     |
| **Clear lowest set bit**   | AND trick       | `x &= (x - 1)`        | Removes rightmost `1`   | “Drop the last ON bit” |
| **Isolate lowest set bit** | AND trick       | `x & -x`              | Keeps only lowest `1`   | “Find first ON switch” |
| **Create mask**            | Shift           | `1 << i`              | Single bit mask         | “Pointer to one bit”   |
| **Invert all bits**        | NOT `~`         | `~x`                  | Flips every bit         | “Reverse all switches” |

<!-- markdownlint-restore-->

:::tip why $$x-1$$ is important?
$$x-1$$ mentioned above is another concept to remember.
When we minus 1 from any number, it will always toggle all ending zeros to ones and
the first available 1 to 0.
Then performing an **AND** between these two values will operate on the rightmost 1 bit.
:::

:::tip what $$x\&-x$$ means?
Important nuance to keep in mind is,
between x and -x the bits are same until the first/lowest 1,
after that all bits are opposite between x and -x.
:::

:::danger whats the variable in bit shift operators
It always means the **number of times** the bit sequence must be moved left or right.
Or other way to look at it's, to say move the bit at that **index** position to $$0^{th}$$ position.
:::

:::warning smallest mental model to remember

- OR - sets a specific bit to 1.
- AND - sets a specific bit to 0 (but the mask must be 0 at that position and 1 at rest.)
- XOR - Changes 1 to 0 and 0 to 1.
  :::

:::important checking vs extracting

- Checking returns boolean - true or false.
- Extracting returns actual value - 0 or 1

It's important to know this distinction.
:::
