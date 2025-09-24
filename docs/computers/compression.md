# File Compression

Normally we come across two types of files. One is tar and other one is tar.gz.

1. **tar** - This itself doesn't do any compression.
   It's only job is to take a directory and put them into one single file.
   The client of the tar know hows to unpack it and
   create the folder structure again on the destination.
   It's also referred to as **tar ball**.

    :::important information in headers
    The created single tar file contains headers which describe details
    such as file, its directory, its size, etc.
    :::

2. **gz** - This is where the actual compression happens.
   Here the characters are encoded into lesser number of bits.
   Normally each character needs minimum 8 bits.
   The encoder creates bit sequences that represent different characters based on the usage.
   The more frequent a character is used in the file, the smaller is the bit sequence size.

    :::info encoding information headers
    Similar to tar ball, even here the encoding is stored in the headers.
    :::

## Prefix Code Tree

Prefix code is a concept where when a code is assigned to a specific value,
then no other codes can start with the same code.

Example, if 1 is assigned as code to any value, then no other code can start with 1.
This is also how country codes in phone number assigned.

:::warning why prefix coding is preferred?
This is efficient because the data be decoded as it's streamed. No backtracking is necessary.
Every bit or combination of bits that comes in, refers to a code already.
:::

:::tip similar to network packets
To transfer network packets, a similar encoding is used
since the electrical signals representing 1 and 0 must be also decoded on the fly.

The receiver must know which the bit starts and when it ends.
On one side, the receiver must have a clock which reads the bits at a constant/specific rate.
On the other hand, too many high voltage will also create noise.

So there is an encoding scheme that's used to represent these electric signal patterns to actual bit sequence.
This scheme ensures that there are no long sequences of high or low voltages.
:::
