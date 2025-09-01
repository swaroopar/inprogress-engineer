# Fragmentation

It's about memory or disk being used in fragments and
causing no continuous memory range to be available.

## Paging and Fragmentation

To avoid fragmentation, the memory is split into pages
and application receives memory from different location.
It's never continuous.

But paging and MMU collates these pieces of memory pages such that
the application views it as a single continuous block of memory.
