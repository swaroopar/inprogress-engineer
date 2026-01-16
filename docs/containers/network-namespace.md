# Network Namespaces

Container runtime first executes a command like below to create necessary virtual network devices and
then moves the source virtual port to container's network namespace.
What exactly happens inside the kernel during this can be understood [here](../linux/network-devices.md#how-physical-and-virtual-devices-created).

```bash
# System call to kernel to create device veth0 of type veth and connect it to peer veth1
ip link add veth0 type veth peer name veth1
```

## Network Namespace Isolation

It's this isolation that provides each container its own memory structures for network devices,
routing tables, firewall rules, and other network-related configurations.
See [Linux network device](../linux/network-devices.md#kernel-as-router) to understand how this is achieved.

:::warning no restriction on connection between namespaces
Namespaces only provides isolation of memory structures.
There is no restriction on how the devices in different namespaces can be connected.

This is exactly why the **veth pair** works.
One end of the veth pair can be in host namespace and other end in container namespace.
Then the bridge (acting as L2 switch) is also on the host namespace.
:::

Even though there are namespaces, the kernel acts as one single router that handles all data movement.
See [this page](../linux/network-devices.md#how-multiple-ip-addresses-on-the-same-device-work) for more information.

![kernel-the-single-router](../../static/img/network-multiple-ips.excalidraw.png)

## Docker Networking Model

:::important Docker implementation and not kernel restriction
The setup what we see in Docker networking model is it's own design,
on how it would like to use the network capabilities of the kernel.
Kernel doesn't enforce any such rules or models.
:::

It's the Docker network model that implements L2 bridge on the host namespace.
This is done since the Docker daemon is running on the host namespace and
it can easily configure the data plane and control plane from there.

This very small nuance is important to understand that the Linux network namespaces
allow communication between different namespaces as long as the devices are connected via veth pairs.

## Why docker subnet can't be reached from outside network?

When external system sends an ARP request,
none of the physical switches really know about this network.
so no request ever reaches the host itself.
See [routing](../network/routing.md#router-and-switch-integration) document for more information.

:::tip What happens if the ARP reaches host
If at all somehow the ARP reaches the host router, the host will answer with MAC address.
Then the host will receive the data, check the destination IP and consult the routing table.
Then it will forward the frame to the container gateway.

The container network's gateway will perform do ARP on the destination IP and forward it to the container.
But this will never happen since the internal network isn't exposes outside at all.
:::
