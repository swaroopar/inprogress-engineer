# Pseudo Elements vs Pseudo Classes

They're called **pseudo** because they don't exist really in the DOM.
It's just logical.

## Pseudo Elements

These elements are a way to access the selected part of an existing physical element in the DOM or
a virtual element that doesn't exist in the DOM tree.

It's described using **::** symbol.

These virtual elements that are added using before and after are simply considered as child elements of the physical element to which it's added.

:::info[Available Pseudo Elements]
first-letter, before, after, first-line, selection and many more.
:::

![pseudo elements](../../static/img/pseudo-elements.excalidraw.png)

## Pseudo Classes

These are ways add selectors to filter based on a specific interaction state of an element or its position in the DOM tree.

It's described using **:** symbol.

:::info[Available Pseudo Classes]
hover, focus, invalid, nth-child and many more.
:::

:::danger[difference]
It's important to understand that pseudo-elements are selectors to access part of an element.
Where as pseudo-classes are for selecting state of the element or an element in the DOM tree.
:::

## Combining Pseudo Elements and Classes

It's possible to combine pseudo elements and classes.

A good example is **::hover::after**. In this case, after the element is hovered, a new virtual element is added/styled next to the element.

:::tip[useful links]

-   https://ishadeed.com/article/clickable-area/
    :::
