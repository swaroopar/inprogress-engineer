# Function Calling

In most documents, it's mentioned that CPU just executes the instructions one by one.
But how does the CPU handle function calls?

When a function is called, the CPU needs to do the following:

1. Save the current execution context (for example, registers, program counter) onto the stack.
2. Jump to the function's code location.
3. Execute the function's code.
4. Restore the previous execution context from the stack when the function returns.

![Function Call Stack](../../static/img/return-statement-handling.excalidraw.png)

## Stack in Native Execution

Stack is region in the process's [memory space](./process-memory.md).
This is just the regular [stack and frame data structure](../data-structures/stacks.md#frame-concept).

## Registers Used

RBP - Base Pointer Register: Points to the base of the current stack frame.
RSP - Stack Pointer Register: Points to the top of the current stack frame.

:::tip pointers in stacks
These are nothing but memory addresses in the process's memory space.
:::

## Function Call Instructions

CALL - Calls a function.
This includes pushing the current code address to the stack and
set IP to new function's code address.

RET - Returns from a function.
This involves popping the return address off the stack and jumping back to that address.

:::important RET is only about returning control
RET at native level is only about returning control to previous code address where it was left.

It's **not** about **returning** value.

The **returned value** is stored at a CPU register which the calling method knows.
It's the responsibility of the called method later copy it from the register to stack.
:::

## Ensuring Stack Balance

Whenever a function is called,
it's the responsibility of the native code to ensure the stack is cleared.
Which means, when CPU encounters the return statement,
CPU will copy the address in RBP to RSP which effectively clears the stack frame of the function.
