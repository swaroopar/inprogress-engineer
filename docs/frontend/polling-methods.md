# Polling Methods

:::info[Session initiation only from client possible]
We need polling because only the end user /client can send request to web server and ask for data.
Whereas the server can't initiate an HTTP connection from it's side to end user's IP address to pass data.
:::

## Long Polling

The server doesn't respond to the polling immediately. Instead holds the HTTP session until a change occurs and then responds.

![long-polling](../../static/img/long-polling.excalidraw.png)

## Short Polling

Responds immediately to the polling request with whatever update it has.

![short-polling](../../static/img/short-polling.excalidraw.png)

## Server Sent Events

Starts one single HTTP session from client and the server uses the same session to send multiple responses.
This is unidirectional way of sending multiple responses back to the client.

![sse-polling](../../static/img/sse.excalidraw.png)

## Websockets

Starts with one HTTP session from client to perform an handshake with server to start a websocket protocol based session.
After that the client and server communicate with each other using the **ws** protocol.
This is a bi-directional way of sending multiple requests and receiving multiple responses using the same HTTP session.

:::tip[Websocket use]
Websockets are mostly used in chat based communication.
:::

:::danger[Websocket protocol blocked]
Since websocket uses its own protocol, mostly firewalls and load balancers can block them
and it needs special configuration to handle them.
:::

![websockets](../../static/img/websocket.excalidraw.png)
