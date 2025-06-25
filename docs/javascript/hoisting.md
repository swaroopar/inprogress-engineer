# Hoisting

It's a JavaScript specific concept where the variable and function declarations are automatically moved up by the compiler.
This is exactly why JS still doesn't throw errors when using 'var' variables before it's declaration.

:::tip Meaning of hoisting
This is exactly same as flag hoisting where a flag is pulled up.
Similar to that, here the variables are pulled up in their respective scopes.
:::

:::danger What happens when no value is assigned in the declaration
Only in case of **var,** the variable is hoisted and also a default value is assigned, 
which means it's moved to the top most location in their respective scopes and an 'undefined' is assigned.

```js
var a = undefined; // after hoisting
```

Where as let and const is hoisted but no value (not even undefined) is assigned.
So accessing anything before assignment will throw exception in runtime. 
:::

## Function

All functions are also hoisted.

:::warning
If functions are assigned to 'const' variables, then the hoisting works according to **const** rules.
This basically means, the function can't be executed until the variable is really referenced to the function definition.
:::
