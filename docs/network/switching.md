# Switching

Switches perform layer 2 based forwarding.
It sees the MAC addresses in the Ethernet frames
and forwards the frames based on MAC address table.

:::important switch ports don't have any address
The switch ports don't have any MAC or IP addresses assigned to them.
They just forward the frames based on MAC address table.
:::

## Role of Switches and cables

1. These are the devices to which end devices connected to via cable or wireless.
2. They do data transfer based on MAC addresses.
3. **Switch ports itself don't have MAC addresses.**
   **They only know on which port which destination MAC is connected**.

:::tip Device connection with cables
Any device that's wired or wireless directly connected will only transfer data to the connected port.
The application behind this connected port sees the destination MAC and
**switches** the data flow to the port which has the destination MAC connected device.
:::
