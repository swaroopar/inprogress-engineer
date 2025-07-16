# Virtual File Systems

Virtual file system means, the file system that's not directly tied to a physical storage device.
These files are actually hosted on memory and not on a disk
and more importantly, the contents of these files are dynamic.

:::important dynamic file content
The VFS layer, routes the open, read, write, and close calls to the appropriate file system implementation.
In case of virtual file systems,
these functions are implemented by the kernel to read or write it's internal data structures.
:::

:::danger Directories and files in virtual file systems

The directories and files are created as and when the system needs them.
Only the content is dynamic and comes from internal data structures of the kernel.
:::

## Important virtual file systems

### /proc

The **/proc** file system is a virtual file system that provides an interface to kernel data structures.
It contains information about each process - such as how it's started, its memory usage, and other details.

:::tip use of /proc file system
It's mostly fo read only except for some files that allow writing to change kernel parameters.
For example, you can change the maximum number of open files by writing to **/proc/sys/fs/file-max**.
or IP forwarding by writing to **/proc/sys/net/ipv4/ip_forward**.

Tools like top, btop read data from **/proc** file system
:::

### /run

This is also a virtual file system but backed by RAM.
Such filesystems are called **tmpfs**.

This file system is used as a temporary storage for runtime data.
It's also used for communication between processes and services.

:::warning /proc vs /run
/proc isn't a real writable file system. It only exposes kernel data structures.
/run is a real writable file system that stores runtime data.

So **any** userspace programs that need to store temporary data can use **/run**.
:::

### /sys

The **/sys** file system is a virtual file system that provides an interface to kernel device data structures.
It contains information about devices, their attributes, and configuration options.

:::danger write operations
Write operations on **/sys** file system changes the configuration of the underlying device.
Updating a value here, is same as updating a device configuration using a command line tool like **sysctl**.
:::

### /dev

The **/dev** file system is a virtual file system that provides an interface to hardware devices.
It contains device files that represent hardware devices, such as disks, network interfaces, and USB devices.

:::tip /dev vs /sys
/dev is used to interact with devices, while /sys is used to query and modify device properties.
:::
