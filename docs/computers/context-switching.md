# Context Switching

Context switching in CPU happens in two different ways.

1. OS scheduling different threads as part of preemptive scheduling.
2. CPU itself switching context's due to hardware, software interrupts and exceptions.

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

### Process with multiple threads

When a process has multiple threads,
the OS maintains one data structure for each thread of the process.
This is called Thread Control Block (TCB).
One PCB contains a list of TCB objects for all threads of the process.

When a thread is scheduled, OS uses the TCB of the thread to
store and restore the context of the thread.

## Context Switch by CPU

When CPU is executing instructions and in between if an interrupt signal is received
(from any device or from system calls),
then the CPU saves the current execution to process's memory called the **kernel stack** of the process.

:::info Number of kernel interrupt stacks
There is one kernel interrupt stack per CPU.

It's on this stack the CPU stores the current execution context first and
then executes the interrupt handler code and
when the handler returns, the bottom of the kernel stack contains the saved context,
which is then used by the CPU to restore and continue execution.
:::

This stack is used to store the current value in CPU registers, flag registers, etc.

On top of this stack, is the interrupt handler executed.
So when the interrupt handler returns,
the stored values from the interrupted user process are restored by the handler
and executes the **IRET/sysret** instruction.

:::danger nested interrupts
If there is a new interrupt during the execution of interrupt,
then even that execution is paused and saved to the same interrupt stack.
:::

## Kernel Stack and User Stack

For every thread in Linux, there is a kernel stack and user stack.
Whenever there is a system call to be done, the CPU is switched to kernel mode and
the system call handler then updates CPU registers to use the kernel stack
to execute all system calls and exceptions (such as page faults).

:::warning kernel stack vs interrupt stack
There is one interrupt stack per CPU and this is used only for hardware interrupt handling.

Whereas kernel stack is one per thread and is used by system calls and exceptions.
:::
