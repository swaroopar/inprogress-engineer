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
