# inode

:::danger inode is used for all IO
Linux uses an inode structure for all IO operations even though it's mainly used for files.

For other IO operations such as sockets, the inode structure has information that's necessary to access the sockets.

But this page describes only about inode data structure for real files.
:::

:::tip inode is an ext4 concept
inode is just an Linux ext4 file system concept.
NTFS used in Windows also has a similar concept
but it's called MFT - Master File Table.
:::

Every file and directory has an **inode** object linked to it.

It's nothing but a C structure that's also serialized and stored in the corresponding disk which is hosting the file.

:::info inode number vs inode structure
When speaking about inodes, we always refer to the number.
This is just an index number in the inode table which then has a mapping to the corresponding address of inode structure of the file.
:::

![inode-data](../../../static/img/files-inode.excalidraw.png)

## inode contents

Every inode structure contains information such as

1. Pointer to data blocks where the file content is hosted.
2. owner and group information.
3. Access permissions.
4. File type
5. Pointers to data blocks.

:::important inode doesn't hold the most important information
It's very important to keep in mind that the inode neither contains the file name nor
the file data.
:::

There is a inodes cache maintained by kernel on memory.
It keeps adding data to it whenever files are accessed.

## inode Limits

Every disk has a limit of number of inodes it can host.
This is because storing inode also takes space in the disk's super block.

## dentries

Directory entries (dentries) are the map between the file/directory name and its inode number.
This map is the content of the directory data blocks.

There is a dentries cache maintained by kernel on memory.
It keeps adding data to it whenever files are accessed.

:::tip . and .. in directories
dentries map also contains entries with **.** and **..** which points to inode of current directory and parent directory respectively.
:::

## Recursive Search

The inode of the final destination file is searched recursively.
It starts at the inode of the root directory of that filesystem.
This is stored and is ready available in the superblock of that corresponding filesystem.

From the root directory, the kernel then keeps drilling down the next inode number until the
inode number of the final file is found in the **inode table**.

![file-search](../../../static/img/file-finding-process.excalidraw.png)

:::info uniqueness of inode number
inode number is unique only within the corresponding file system.

If multiple filesystems are mounted on a same host, then same inode number can exist on multiple file systems.
:::

:::tip useful links

- https://github.com/suvratapte/Maurice-Bach-Notes/blob/master/4-Internal-Representation-of-Files.md
  :::
