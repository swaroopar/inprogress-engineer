# Gateways

Even though the name gateway makes it look special,
it's just another IP (need not be .1) of the subnet and
this IP is given to a router so that it can then connect this subnet to another networks.

:::important mental model for gateways
The data link layer of a subnet is extended by making a router part of the network.

This is exactly why any broadcast messages reach the gateway interface as well.
:::

## Software behind Gateway

Whenever a gateway is created, there is a software behind it that handles and
routes all request coming in and going out.

![network-gateway](../../static/img/network-gateway.excalidraw.png)
