# POSIX

POSIX (Portable Operating System Interface) is a family of standards specified by the IEEE
for maintaining compatibility between operating systems.
It ensures that the applications developed on one UNIX flavor can run on other UNIX-like systems without modification.

## Standards

POSIX defines the standards that an OS must meet to be considered compliant.
This will help software to be portable across different systems.

- application programming interface (API)
- shell language - The **sh** language specifications.
- file system - Also specifies that the file system should be hierarchical and
  use forward slash as a separator.
- command line [commands](https://en.wikipedia.org/wiki/List_of_POSIX_commands)
- many more

:::warning sh shebang
The **sh** shebang is used to specify that the script should be run in a POSIX-compliant shell.
For example, in Ubuntu there the **/bin/sh** is a symlink to **dash** which is a POSIX-compliant shell.

By adding the **sh** shebang, we get maximum portability,
since all POSIX based systems will have a POSIX-compliant shell.
:::

## Windows POSIX

Systems like Cygwin and WSL provide a POSIX-compatible environment on Windows.
They translate POSIX system calls into Windows API calls.
