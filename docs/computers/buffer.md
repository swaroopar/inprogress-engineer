# Buffer

Buffers are used for storing data temporarily.

:::important buffer is for binary data
Buffers are continuous memory used to write binary data.

For example, data coming from disk, data coming from network.
All these are directly streamed into buffers.
The buffers can be then read to convert bytes into whatever encoding is necessary.
:::

## Stream vs Buffer

Stream is the actual input or output source of bytes.

Buffer is where the data is stored from the stream before sending it to next destination.

## Streams vs Readers

Streams (InputStream, OutputStream and everything that extends these) are for reading and writing binary data from files, the network, or whatever other device.

Readers and writers are for reading and writing text (characters). They're a layer on top of streams, that converts binary data (bytes) to characters and back, using a character encoding.
