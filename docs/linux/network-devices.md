# Network Devices

## Kernel as Router

Routing happens at namespace level.
Each network namespace has its own routing table.
Every network space gets its own instance of the **ip_forward** kernel C structure.

:::warning not container level
It feels like routing happens at container level or host level.
But it's actually one router per namespace.
:::

## C Structure for NIC

**net_device** is the kernel C structure representing a network device.
Both physical and virtual devices are represented using this structure.

:::important who creates net_device structure
For the kernel, any network device is the same and treats exactly the same way.
It's only difference comes from who creates it.
:::

## How physical and virtual devices created

Physical devices are created by [device enumeration](../computers/pci.md#address-allocation) and
configured by kernel using its [device drivers](./device-manager.md#software-representation).

Similarly virtual devices are added by userspace applications and
the kernel then creates the necessary memory structures to represent them.

![phy-virtual-device](../../static/img/linux-network-device-creation.excalidraw.png)

:::tip why the word link
While creating virtual devices, the term "link" is used because
network devices operate at the data link layer (Layer 2) of the OSI model.
:::

:::warning drivers manage everything
Similar to physical devices, virtual devices also need drivers to manage them.
So when a virtual device is created, the corresponding driver is also loaded to handle it.
:::

## Virtual Ethernet Pair - A virtual wire

When we create a veth pair, it's nothing but connecting two virtual devices virtually.
It symbolizes an virtual cable connecting two devices.
See also [switching page](../network/switching.md#role-of-switches-and-cables) to understand the mental model.

```bash
# System call to kernel to create device veth0 of type veth and connect it to peer veth1
ip link add veth0 type veth peer name veth1
```

:::important how the cable is implemented in memory
Every virtual Ethernet device, the structure contains a peer pointer.
The peer pointer points to another virtual Ethernet structure.
Whenever there is a send request on the source device,
the data is directly copied to the peer buffer memory which simulates the data transfer over a cable.
:::

:::danger Connection from veth to switch port
Similar to how the data is copied from source veth to peer veth,
if the peer is connected to a bridge or switch port,
the data is copied to the bridge or switch port memory.

This is exactly also how the data moves in case of physical systems.
:::

## How multiple IP addresses on the same device work

It doesn't matter how many IP addresses a device has.
What matters is, using this IP, the device is part of which network and
how the routing rules are setup between these networks.

1. If there are multiple IP addresses, the ARP request must respond to all IP addresses with MAC address.
2. Once received, kernel will check if there is any process listening on the given IP and the port.
   If yes, forward data to that process.

![kernel-the-single-router](../../static/img/network-multiple-ips.excalidraw.png)

:::warning kernel is just one single router
The most important mental model is to understand that on every host,
kernel is the main and the only router.

Every other bridge or internal network is simply connected to one of the ports on this router.
This is exactly how data flow works in docker networks too.
From the container, the data reaches the gateway IP which is on the kernel router.
Kernel then uses it's [routing table](../network/routing.md#router-is-one-single-program)
to forward it to physical port.
:::
