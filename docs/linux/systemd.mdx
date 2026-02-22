# Systemd Process

This is the first userspace process that's started by the kernel after the boot.
It's part of the initramfs that's loaded during boot.

1. Mounts all disks that are needed.
2. Network manager configures network devices with IP, etc.
3. starts all services
4. Handles logging
5. Takes over orphan processes
6. If any new devices are detected, it will be handled via udev
7. Also starts the graphical server to take over the system

:::danger systemd isn't an orchestrator
systemd even though has the PID 1,
not all processes started after that goes via systemd.

For example, we directly call fork() or socket() on the kernel.
:::

## Configuration

There is no fixed set of rules that a systemd must do.
In some cases, we may need less things to do.
For example, in case of LXC containers, the network configuration is already prepared by the container runtime.
