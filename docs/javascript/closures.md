# Closures

Closures are **functions** that refers to variables that are neither part of their arguments nor created in their body.

:::tip What accounts to variables
In JavaScript, a variable can be a primitive, object or a function.
So any of these outside references in the function makes it a closure.
:::

## Closure execution

A function is a closure irrespective of when it's executed.
It can be executed immediately, executed by the caller or it can be passed around.

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
