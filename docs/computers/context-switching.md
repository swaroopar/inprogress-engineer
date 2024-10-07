# Context Switching

Context switching in CPU happens in two different ways.

1. OS scheduling different threads as part of preemptive scheduling.
2. CPU itself switching context's due to hardware and software interrupts.

## Context Switch by OS

When OS switches the context, it stores the current context of the CPU using a
concept called **Process Control Block**.
This is part of the process's memory when the process is created.

This has a special data structure which OS uses to store the current state of MMU, CPU registers, etc.

:::tip Consider PCB as regular class
Data necessary to reschedule the thread is copied to process control block's properties.

Whenever the OS reschedules a thread, it then copies all data from PCB
so that the CPU can continue where it actually left off.
:::

## Context Switch by CPU

When CPU is executing instructions and in between if an interrupt signal is received
(from any device or from system calls),
then the CPU saves the current execution to process's memory called the **interrupt stack**.

This stack is used to store the current value in CPU registers, flag registers, etc.

:::info nested interrupts
If there is a new interrupt during the execution of interrupt,
then even that execution is paused and saved to the same interrupt stack.
:::
