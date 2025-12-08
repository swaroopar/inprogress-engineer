# Rings

This is an hardware protection enforced by the CPU based on the **execution context**.
It's nothing to do with kernel.
It's a CPU protection feature that determines the context of execution and ensures strict separation.

:::important Rings provided by CPU, used by Kernel
Rings is a concept implemented and e by CPU.
It's implemented differently in different CPU architectures.
Kernel just uses this features and protects itself.
:::

## Execution context

For CPU, it's just execution context for each instruction that it executes.
For every instruction it executes, it only knows about it.

1. Value of Current Privilege Level(CPL) Register. This is where the ring value is set.
   This is something set when every process is scheduled by kernel.
   So CPU knows in which security level it's executing.
2. Based on this, CPU knows which IO the instruction can access, which memory areas the instruction can access.

:::warning Memory area protected
[Page table](./memory-paging.md#memory-paging) allocated to a process has permissions on each page.
All page tables in the kernel memory space has **supervisor** permissions.
When the instruction with CPL 3 is accessing a page table which needs higher permissions,
then CPU will throw a fault.
:::

## Trust Root

At boot, the bootloader is executed as ring 1.
When bootloader runs the kernel image, even that's done as ring 1.
But when kernel starts systemd, it starts with ring 3.

After that everything that's forked from systemd, will have ring 3.
