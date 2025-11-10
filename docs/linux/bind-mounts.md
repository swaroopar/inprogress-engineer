# Bind Mounts

Bind mount is a special type of file or directory **binding** feature.
This means, a directory at a different location is **bound** to another location.

## In Memory Bound

Normally mount points are configured in the **/etc/fstab** file.
When system boots, every entry in this file is read and
an instance of **Mount Structure** is created.

This is exactly what bind mount command does.
It directly creates a new instance of this structure without making any changes to the file.

:::warning Lost when reboot
Since it's only an object in the memory,
the mount information is lost during reboot.

This is exactly why they're also lost when containers are stopped.
:::

## Difference to soft and hard links

When we create soft and hard links, this information is stored on the filesystem itself.
Whereas in case of bind mount, the information is just **inside kernel memory**.
