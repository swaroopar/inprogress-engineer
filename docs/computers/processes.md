# Processes

It's important to keep in mind that kernel itself being a C program
that's being compiled to native code.

This means, all what kernel does is logic + data models defined in C structures.
Process is one such structure.

## Process/thread Structure

It's this structure **task_struct** that the kernel uses to manage the anything that must be executed.
This has all information related to the process such as PID, page table location,
register information such as current instruction pointer of the thread, etc.

:::important threads and processes
There is no big distinction between thread and process for the kernel when it comes to executing it.
In fact, kernel knows only threads.

Both are represented using the same structure.
This structure also has properties that links threads to main thread of the process.
:::
