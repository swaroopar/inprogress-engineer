# Byte Buffers

ByteBuffer is a type in Java which allocates a fixed and continuous memory space
just to hold binary data.

This is the type used in all IO operations.

## MappedByteBuffer

This is Java's implementation of MMIO.

This means if a file is loaded into JVM using this type of buffer, then
the [page cache](../computers/memory-paging.md#swapping) of that file is mapped directly into
the memory region of the JVM process.

This means while writing or reading data, it will be directly happening on the page cache.

:::tip writing to page cache
Writing to page cache avoid IO since updating page cache will mark the pages as dirty and
kernel will automatically flush the changes to disk.
:::

## Direct Buffers

In this case, buffers are requested additionally from memory outside of JVM.

The advantage is, the JVM memory is kept free for other tasks and IO operations are performed using buffers outside of the JVM.
