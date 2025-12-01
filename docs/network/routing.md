# Routing

It's the rules that simply states

1. which network interface to use.
2. 'next hop' IP address to use (if any).

It doesn't say which IP to use or which MAC to use.
It only says which interface to send it to.
This is exactly why L3 routing happens at the beginning of the network transmissions.

Once the interface is selected using routing table,
then the L2 address resolution happens to find the MAC address of the next hop.

## Router is one single program

:::important consider router as one single program
Even though router has multiple ports, the router has one single routing table.
This is how the data coming from one port is routed to another port by the router.
:::
