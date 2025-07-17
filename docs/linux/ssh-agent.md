# SSH Agent

SSH Agent is the process that always run when the ssh daemon starts.

The role of this process is to load all public and private keys in its memory and
the SSH client will simply forward all authentication requests to this process.

:::info SSH_AUTH_SOCK environment variable
An environment variable **SSH_AUTH_SOCK** is set when agent is started.
This variable value is used by client to know to which agent the
authentication requests must be forwarded to.
:::

## SSH Agent Forwarding

When an SSH connection is made to a remote host with **-A** option,
then second channel will be opened to the remote host.

And also additionally point the **SSH_AUTH_SOCK** to point to the SSH from the localhost.
With this, when any SSH requests are made from the remote host to another remote host,
the SSH client will use the SSH agent from original local host.

![auth agent](../../static/img/ssh-agent.excalidraw.png)
