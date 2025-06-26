# Closures

They're nothing but stateful functions.
This means, the function takes a variable as input and holds the state of the variable.

:::tip Comparison to a class
It's nothing but a short form of writing a class which has some properties and
a function that reads or writes these properties.

This similar to Java's lambdas where an anonymous class is created just with one function.
Only difference is that in Java, the variables can only be read.
It can't be updated.
:::

## Meaning of word closure

**Closure** comes from the phrase **close over** which means something closes or cover something.

- The eyelids closed over her eyes as she drifted off to sleep.
- The lid closed over the box, securing its contents.

:::important why the word closure
In case of JavaScript, it means the code block **closes over** all surrounding necessary information.

It's a closed bundle of function code plus the variables necessary for it to execute independently.
:::

## Lexical environment of closures

Closures get their own [lexical environment](./lexical-environment.md).
This means, when the closure is created, it gets its own map of variables, functions and reference to parent environment.

:::warning life of a closure
The created closure function remains alive as long as the closure object is referenced by any other object.

Just standard object management.
:::
