# Embedded Structs

Embedded structs is a way of extending the struct with T or \*T.

Golang doesn't support inheritance. Instead has **composition** to achieve the same.

```golang
type struct Name {
    OtherStructType
    *AnotherStructType
}
```

By writing the above, we're embedded other this parent struct into the child struct.

## What does this mean

1. Instantiate the struct Name and
   during the instantiation pass the embedded struct value or references depending on the type.
2. All methods and fields of the embedded struct is now **promoted** to the **Name** struct object.
3. If the child struct also has the same method or fields as in the embedded struct,
   then the child struct names and fields get priority by the compiler.

:::info[Anonymous Fields]
Embedded fields are also called as anonymous fields since there isn't name provided to it

Non-anonymous structs will look like the below example. The fields form this **aren't promoted**.

```golang
type struct Name {
    otherStructType OtherStructType
    anotherStructType *AnotherStructType
}
```

:::

## Interface as Embedded struct

We can also use an interface as embedded struct.
In this case, the type can't be a pointer to the interface. Should be just the interface type.

While instantiating, we must pass any object that implements in the interface.

:::important child struct also implements interface
With such an embedding, since all fields and methods are promoted,
the child struct also is seen as an implementation of the interface.
This is very important.
Later we can simply override any implemented method as necessary.
:::

## Zero Values Handling

Zero values are the values that are available for a variable when it's declared without assigning any value.

Example - int is 0, string is "", float is 0 and pointer is nil.

When an embedded struct is initialized with a zero value, the following happens

1. If the embedded struct is a value, even the fields of this struct is initialized with zero values.
2. If the embedded struct is a pointer,
   then the pointer is simply initialized to nil. So calling any method on that struct will fail.

:::tip Sources

- [Embedding: When to use pointer? – Stack Overflow](https://stackoverflow.com/questions/27733854/embedding-when-to-use-pointer/27733969#27733969)
- [When do Go's pointers dereference themselves? – Stack Overflow](https://stackoverflow.com/questions/13533681/when-do-gos-pointers-dereference-themselves)
- [What's the meaning of a pointer to an interface? – Reddit](https://www.reddit.com/r/golang/comments/kit3da/whats_the_meaning_of_a_pointer_to_an_interface/)
- [X does not implement Y (method has a pointer receiver) – Stack Overflow](https://stackoverflow.com/questions/40823315/x-does-not-implement-y-method-has-a-pointer-receiver)
- [Golang Embedding – Hydrogen18](https://www.hydrogen18.com/blog/golang-embedding.html)
- [Embedding struct vs pointer to struct in struct used as pointer – Stack Overflow](https://stackoverflow.com/questions/57236837/embedding-struct-vs-pointer-to-struct-in-struct-used-as-pointer)

:::
