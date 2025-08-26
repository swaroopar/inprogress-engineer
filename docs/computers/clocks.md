# Clocks

A clock or a cycle in the CPU is the maximum time needed for the longest digital circuit to finish its work.

:::tip Example Digital circuits
Digital circuits such as AND, OR and XOR don't provide an output immediately.
They have multiple components and multiple levels.
The caller must know when can he sure that the execution is complete.

So smaller the circuits, faster the CPU speed.
:::

## Multiple uses of clock

1. Computation speed - To know when the computation result is ready.
2. Data speed - To know when the voltage must be considered as next bit.
3. Synchronization - To synchronize the data transfer between different components.

:::important Metronome for CPU
Metronome is a the tool that sends beats at regular intervals.
In case of CPU, this is the beat at which each step of the CPU's pipeline is completed.

See it as an assembly line of factory which just does steps at specific time intervals.
:::

## Analog to Digital Conversion

CPU works only with digital signals.
This means, it works only with two levels of signals where high voltage is treated as 1 and low voltage is treated as 0.

CPU uses the entire sequence of voltage pattern to read all bits of a byte.

## Multiple clock speeds

There is just one clock on the motherboard but each component uses this clock to setup it's own clock speed.

CPU - This is the fastest component and can work with components of lower speeds.
RAM - This is slower than the CPU but faster than most other components.
The memory controllers knows the RAM speed from it's SPE and
configures itself to work according to that speed.
IO Devices - Each operate at their own speeds.
Controllers of each device ensures the data is transferred at the correct speed.
