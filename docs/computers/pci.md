# Peripheral Connect Interconnect (PCI)

It's one chip on the motherboard to which all other peripheral devices are connected to.

It provides an unified and standard way of accessing all IO devices.

At boot, the kernel queries the PCI for all connected devices and its information.
After that the devices are initialized and assigned memory in the same address space
which the CPU uses to access memory.
This feature is called **MMIO - Memory Mapped IO**

:::important Helps in DMA
By adding all devices to same address space, data can be moved around without involving CPU.

CPU can directly update registers of the device's configuration space on what task is needed.
In case of data transfer, it can write the source, destination address.

The DMA controller then takes over the task and controls the PCI bus without involving CPU.
:::

## How single memory space helps

By making RAM and all IO devices to be part of the same memory space,
CPU can directly even access (read/write) memory of the devices.

:::tip Example
For example, when a graphics card needs to update a frame buffer,
the CPU writes directly to the corresponding memory address mapped to that buffer.
:::
