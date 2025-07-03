# Cache Control

Cache control HTTP headers are used by browser to avoid making unnecessary calls to web servers.

When any API response has **cache-control** headers set,
then the **fetch** request doesn't send the request to the server again.
It will instead directly return the previous response what was sent by server.
