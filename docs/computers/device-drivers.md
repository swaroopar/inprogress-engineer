# Device Drivers

They run on the kernel space and let's userspace applications to interact with the hardware device.

1. It has to implement the VFS standard methods such as **open(), read(), write(), ioctl()**.
2. These methods then reads the initial configuration from the device registers.
3. They update the data to buffers and read data from buffers.
4. Update the device registers with information such as volume for audio devices.

:::tip high level explanation
This is a very high level idea of what device drivers are.
It's necessary to understand the roles of each component.
:::

![device-driver](../../static/img/device-driver.excalidraw.png)

:::warning controller driver
Usually controller driver isn't mentioned separately.
It's part of the device driver itself.
Controller driver speaks to the device via the device controller chip which is available on the motherboard.

Example - if USB audio device is connected, the device driver interacts with the device using the
USB controller driver to control the device via the USB bus.
:::
