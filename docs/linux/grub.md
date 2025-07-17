# GRUB

GRUB - GRand Unified Bootloader

It's **unified** because

1. Supports multiple operating systems.
2. Supports different Linux kernels.
3. can load kernel from different file system types.

## UEFI Runtime

UEFI - Unified Extensible Firmware Interface

UEFI runtime is the software that understands specific file format.
GRUB implements such an application which UEFI runtime can parse and execute.

:::danger UEFI can work with any bootloader
UEFI can work with any bootloader that provides an **.efi** bootloader implementation.
:::

![uefi-exeuction-process](../../static/img/uefi-grub.excalidraw.png)

:::important comparison to other runtimes
JRE understand **.class** files.
Kernel understand **.ELF** native files.

The runtime then schedule the application for CPU to execute.
This is exactly what UEFI does.
It takes GRUB which is an UEFI based application and executes it.
:::

## Configuration

GRUB configuration is the **grub.cfg** file which shows what values must be displayed on UI on boot to choose from.
This file is passed to GRUB's UEFI application.

## Application storage

GRUB application is stored in a special filesystem of type FAT under **/boot/efi**.
It's location is mentioned in the boot order which is stored in a non-volatile area in RAM.

## Execution process

![uefi-exeuction-process](../../static/img/uefi-boot-process.excalidraw.png)
