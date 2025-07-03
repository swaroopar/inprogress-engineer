# Method Set

A method set is the Golang feature where the compiler knows the set of the methods available for a type
and this set is created based on the **method receiver** type.

Since a method receiver can be both a value or a pointer, the compiler decides the method set based on the variable type.

:::danger Regular methods vs interface methods
In case of regular methods, a T or *T type can call a methods with T or*T receiver.
There is no restriction.

The restriction of T variable not being able to call methods of \*T receiver **applies only to interfaces**.

Worry about method sets only when working with interfaces.
:::

## From Golang FAQ

This distinction arises because if an interface value contains a pointer \*T,
a method call can obtain a value by de-referencing the pointer,
but if an interface value contains a value T, there is no safe way for a method call to obtain a pointer.
**Doing so would allow a method to modify the contents of the value inside the interface,
which isn't permitted by the language specification.**

## Selector

A selector is the **.** operator which is used to call the method or access the field.

When the dot operator is used on a type,
the compiler knows which methods are available for the type based on the method set.

## Method Sets of interface

1. Value receivers operate on the copies of the original value.
   So this can be called using a T or \*T.
   This is because, if T is known then the compiler automatically gets the address (using &) to call the method.
2. Pointer receivers can be called only using pointer types.
   So only type an interface type \*T can call.

:::important Method vs Function

In all programming languages, we must understand the difference between a function and a method.
All methods are functions. But not functions are methods.

A method is a function that's linked with the context of a type/struct/class.
:::

:::tip Sources
[Understanding Method Sets in Go (semanticreatures.com)](https://semanticreatures.com/2024/03/08/understanding-method-sets-in-go/)  
A detailed explanation of how method sets work in Go, including practical examples and diagrams.

[Pointer vs Value Methods in Go (gronskiy.com)](https://gronskiy.com/posts/2020-04-golang-pointer-vs-value-methods)  
A comparison of pointer and value receivers in Go, with code samples and best practices.
:::
