# Temporary File System

This is the file system backed by volatile memory such as RAM.
It's used to store temporary files that aren't needed after a reboot.
This is usually called the **tmpfs**.

:::important /tmp and tmpfs
/tmp is recommended to be backed by tmpfs.
Only then the /tmp is really temporary.
:::
