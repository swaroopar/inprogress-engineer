# rootfs

This is the filesystem created during the operating system installation.

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
