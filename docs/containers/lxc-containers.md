# Linux Containers (LXC)

We see that in [docker containers](./isolation.md#container-creation-process),
the application process is just started with other namespace.

In LXC, we start a new systemd process with it's own namespaces and with PID 1.
This makes it feel more like a full virtual machine.
This is also why they're called **system containers**.

:::info LXC vs Docker
Other than this, Linux and Docker containers are very similar in terms of isolation and resource management.
They use the same kernel, same namespaces concept, network devices concepts, etc.
:::
