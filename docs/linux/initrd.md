## Initial Ram Disk

**initrd** is a [temporary file system](../storage/temporary-file-system.md) that's loaded from [boot](./boot-directory.md) into memory.
It contains the main **init** program that will be executed the kernel

1. It starts the init process which starts the **systemd**.
2. **systemd** then takes over the [next process](./systemd.md).

:::info initrd from Operating System
**initrd** is Operating System specific.
Each distribution builds its own initrd during installation.

Kernel only expects an initrd to be present and
a file **/init** to exist inside it.
Kernel then simply executes that file.

- Kernel - is common
- initramfs - distribution specific
  :::
