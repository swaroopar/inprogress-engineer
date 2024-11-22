# CSS Selectors

**#value** - takes the element which **id** attribute with value provided next to **#** symbol.

**html-element-name** - Takes all HTML elements with the provided name.

**.css-class-name** - Selects all HTML elements which are styled with the provided class name.

:::important combine **.** and **HTMLElement**
It's possible to combine **HTMLElement** and **.** character.

Example p\.ClassNameExample.
:::

**[attribute*value]** All other attributes other than the **id** attribute can be handled with **square brackets**.
The symbol between attribute and value can be =, ~= and many more.

**div:nth-child(n)** - takes all div elements in the DOM tree and picks which div is a Nth child
of its parent element. The parent element can be anything and anywhere in the DOM tree.

:::note nth-child on any HTML element
Here div is just an example.
:::

**parent > child** - This is called **child combinator**. For the parent mentioned in the left hand side, takes all it's **direct** child elements in the right hand side.

The parent and child can be at any stage of the DOM.

**ancestor descendent** - This is called **descendent combinator**.
For the ancestor mentioned in the left hand side,
all descendent elements mentioned in the right hand side in any position inside the tree is selected.

:::important nested child and descent combinators
It's possible to select a specific nested child and descendant in the DOM tree.

Example - parent > child > grandchild means the third inner grandchild element will be chosen.
or parent child grandchild means all grandchild elements which are under parent and
:::

**first sibling **+** second sibling** - This is called **adjacent sibling combinator**.
Here two types of sibling possible. In this case, first sibling and
second sibling must be right next to each other.

**first sibling **\~** second sibling** - This is called **subsequent sibling combinator**.
In this case, first sibling and second sibling need not be immediate next to each other.
It will select all second sibling elements of the mentioned type.

:::note sibling
Sibling means elements at the same level in the DOM tree.
:::
