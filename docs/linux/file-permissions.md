# File Permissions

The Linux permissions uses 'octal' number system to describe permissions.

:::info what's octal number system
Octal number system uses base 8 to represent numbers.
This means, it uses 8 symbols to represent numbers. 0,1,2,3,4,5,6,7.
:::

## Octal Representation of Permissions

When you say `chmod 755 file.txt`, it means, you are setting the permissions of the file.txt to 755.

- The second digit 5 represents the permissions for the group of the file.
- The first digit 7 represents the permissions for the owner of the file.
- The third digit 5 represents the permissions for others.

And each digit when converted to binary represents the read, write and execute permissions
of .

| Octal | Binary | Permission |
| ----- | ------ | ---------- |
| 0     | 000    | ---        |
| 1     | 001    | --x        |
| 2     | 010    | -w-        |
| 3     | 011    | -wx        |
| 4     | 100    | r--        |
| 5     | 101    | r-x        |
| 6     | 110    | rw-        |
| 7     | 111    | rwx        |
