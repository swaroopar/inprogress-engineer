# rootfs

This is the filesystem created during the operating system installation.
It's then mounted at '/' (root) during the boot process.

:::important switching from initramfs to rootfs
During the boot process, the '/' directory is mounted with [initramfs](../linux/initrd.md) file system.
This then swapped with the real root filesystem (rootfs) that was created with the operating system installation.

This switching is done by commands such as **pivot_root**.
It's the same logic that's also used by docker containers to switch
from the host filesystem to the image's rootfs.
:::

/bin - essential system binaries

/etc - configuration files

/lib - shared libraries

/home - user directories (optional, depending on the setup)

/dev - device files

/proc - virtual file system for system information

/sys - another virtual file system for kernel-related information

## Kernel vs userspace applications

These filesystems aren't used by the kernel itself.
It has all tools necessary for userspace applications to interact with the kernel.
