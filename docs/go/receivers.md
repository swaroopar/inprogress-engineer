# Receivers

## Functions vs Methods

Functions are standalone.
They just take arguments and work on it.

Methods are linked to a class.
They're functions that can be called with **this** or **self**.
These functions already have access to the properties of the class
even if they're not sent as parameters.

## Method Receivers

In Golang, there is no concept of classes. Instead we've **Method Receivers**.
The methods in Go have receiver argument.

```go
func (t ReceiverType) FunctionName(Parameters...) ReturnTypes...
```

Calling the function is same as other languages.

```go
t.functionName()
```

## Value Receiver vs Pointer Receiver

The receiver can be either value or a pointer.
So based on the struct type, either it's value or pointer, the corresponding method is available.

### When to use which type of receiver

The general approach is to use pointer receiver if the calling method must or will update the receiver object.
Otherwise simply use the value receiver.

:::tip Modifying Method
Always think of **pointer receiver** method as a modifying method.

Which means the method will modify the original struct and
hence needs access to original data.
:::

:::important Receivers are first argument
It's very critical to understand that, the receiver defined in the method is
nothing but the first argument of the method after compiling.

So the receiver data can be accessed directly in the method.

This is similar to **self** in Python and **this** in Java.
:::
