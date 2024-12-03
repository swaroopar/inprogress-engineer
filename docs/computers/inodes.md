# inode

Every file and directory has an **inode** object linked to it. 

It is nothing but a C structure that is also serialized and stored in the super block of the corresponding disk which is hosting the file. 

## inode Limits

Every disk has a limit of number of inodes it can host. 
This is because storing inode also takes space in the disk's super block. 