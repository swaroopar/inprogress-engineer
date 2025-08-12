# Chipsets

It's one chip on the motherboard to which all other peripheral devices are connected to.
In the past, there were two chipsets but in the modern systems,  
most of functionalities of the northbound chipset such as memory controller is moved inside the CPU itself.

The southbound chipset currently connects to peripheral devices and
acts like a switch to share the same data bus on the motherboard between multiple devices.

:::important Faster devices connect to CPU directly
Many faster devices connect to CPU directly instead of going via the chipset.
For example NVMe devices have direct connections to CPU on the motherboard.
:::

![chip-set-connections](../../static/img/chipset-connections.excalidraw.png)

:::warning controller for PCI
For PCI devices, the chipset has no special controllers.
It only validates the PCI packets and directly passes it to the PCI controller in the CPU.
:::
