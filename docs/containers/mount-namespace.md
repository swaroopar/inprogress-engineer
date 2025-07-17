# Mount Namespaces

When a container is started, docker creates a mount namespace with all necessary directories.

## rootfs

Every image has it's rootfs packaged inside it.
This gives the first level of isolation from the host system and
also controls the size of the image.
If the application running doesn't need a lot of operating system libraries,
the rootfs can be kept as small as possible.

It basically means, the process in this namespace sees it's own /lib, /bin, /sbin, /usr, /home, folders.

:::warning only own rootfs
Containers have only their own rootfs but the kernel is used form the host.
So any of the system calls will go via the host kernel.
:::

## Isolation

1. Docker mounts all new virtual filesystems - /dev, /proc, /sys , etc.
   These are just mostly read only dynamic kernel information.
   When executed, the kernel returns whatever information the process's namespace can see.

2. **rootfs** is part of the container.
