# Functions

Functions in JavaScript are first class citizens.

When functions are created, the JavaScript engine first validates for syntax and after that

1. Allocated memory for a new function object.
2. Attaches the function body, lexical environment map, etc
3. Returns the function reference ID - which is like a pointer to the memory where the function is located.

:::warning functions not always recreated
Normal functions - reference created once when the function is referred for the first time.
After that the same reference is reused.

Child functions - the function objects are created each time the parent function is executed.
This is because every function has it's own lexical environment which is created during the execution
and its garbage-collected after that.
:::
