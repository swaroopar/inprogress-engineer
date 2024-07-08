# Pointers and References

In Go, it's always **pass by value**.
Even for structs, the object is copied into a new object when passed to the method.

:::warning[Different from Java]
In case of Java, the objects aren't not really **pass by value**.
The value of the reference to the object is passed.

This is why objects are mutable in Java by default.
:::

## Pointers

Since it's **pass by value** by default, it's sometimes necessary to **pass by reference**.
For example, if we want to allow the called function to update the passed value,
or if passing a huge object by value isn't performant enough
since the object is copied and sent to the calling function.

### Asterisk Symbol

This one symbol is used for multiple things. This is a bit confusing.

1. Declaring pointer types.
   This is used to declare a variable that refers to address of the given type.

Same is also used to declare function arguments that are pointers.

and also for declaring pointer fields in structs.

```go
var p *int
```

2. De-referencing pointers.
   It's used to access the value available at the pointer.

```go
x := 5
p := &x
fmt.Println(*p) // Prints 5
```

### Ampersand Symbol.

This is used to get the **address-of** the variable.

:::info[Ampersand used only for getting the address]
**&** symbol is used only for getting the address of the variable or struct.

For everything else, we use asterisk symbol.
:::

## Implicit De-referencing

In case of structs, there is no need of explicit use of \* symbol always.

Even if we've a variable that has the adress-of a struct,
the variable can be used directly to access the struct fields and the receiver methods.

```go
type Person struct {
    Name string
}

func (p *Person) SayHello() {
    fmt.Println("Hello, " + p.Name) // No explicit * needed
}

func main() {
    p := &Person{Name: "Alice"}
    p.SayHello() // Implicitly dereferenced
}
```
