# Systemd Process

This is the first userspace process that's started by the kernel after the boot.
It's part of the initramfs that's loaded during boot.

1. Mounts all disks that are needed
2. starts all services
3. Handles logging
4. Takes over orphan processes
5. If any new devices are detected, it will be handled via udev
6. Also starts the graphical server to take over the system.

:::danger systemd isn't an orchestrator
systemd even though has the PID 1,
not all processes started after that goes via systemd.

For example, we directly call fork() or socket() on the kernel.
:::
