# Standard Streams

These are the ways a process is allowed to interact with the external environment.

**stdin** - Defaults to keyboard
**stdout** - Defaults the screen connected.
**stderr** - Defaults the screen connected.

:::important Standard streams inherited
For new processes/commands, standard stream file descriptors are inherited in the new process.
This is exactly why the command output is simply written to same place from where the command is executed.
:::

## Information in File Descriptors

Every process has a file descriptor for all IO as well.
The first 3 file descriptors for any process are 0, 1 and 2 which is stdin, stdout and stderr respectively.

The file descriptors fo these standard streams are address to a buffer object
(backed by arrays or linked lists) from which the data is read or written.
