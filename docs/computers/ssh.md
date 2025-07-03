# SSH

SSH stands for secure shell.

## SSH Tunnel

This is the connection/session setup between the SSH client and the SSH server processes
after the authentication process is completed.
It's the default SSH setup. Nothing special. The tunnel contains multiple channels for different type of data.

![ssh-tunnel](../../static/img/ssh-tunnel.excalidraw.png)

## Standard IO in SSH

SSH client process will accept all stdin from the user and encrypt and send it to through the ssh tunnel.

SSH Server process will receive the data over SSH tunnel, decrypt and fork a new process to execute the command received.
The forked command stdout is written to the SSH server's stdin which is then sent to the client's session.

The client then when receives a response from server, it then routes the response the stdout stream of the client process.

:::tip See SSH similar to HTTP
Just understand that SSH is nothing different to HTTP.
Just the application layer protocol with different specifications for client and server communication.
:::

### SSH Channels

Similar to HTTP2, SSH uses multiple TCP channels using the same TCP session.

There is one main channel for stdin and stdout. There is another channel for stderr and many more for other purposes.

:::important Channels are at application layer
SSH channels are implemented at application layer.

This means, the packets have a special header so that the client can different between different streams of data.
:::

## TCP Session

When an SSH connection is established, the same TCP sessions exists between the SSH client
and server until the connection is closed manually or
if the session is idle for a long time.

## PTY - Pseudo Terminal

When we make an SSH connection to a remote server,
we get terminal which gives the user a feeling that the user is directly connected to the server terminal.
This is why it's called a **pseudo** terminal.

This terminal only reads the stdin and writes to server via SSH protocol
and receives responses from SSH remote server and writes it in the SSH terminal.
But the user feels as if he is really on the remote server.
