# JSX

JSX is a templating language created by React team. It is just a syntactic sugar for the below React JSX Factory Function.

```javascript
React.createElement(component, props, ...children);
```

This means that the compiler converts JSX to JS by adding React.createElement function.

```javascript
import React from 'react'; // We need this import. Otherwise the compiler will not add it.

function App() {
    return <h1>Hello World</h1>;
}
```

After compiling, the JSX would look as below.

```javascript
import React from 'react';

function App() {
    return React.createElement('h1', null, 'Hello world');
}
```

## Using the new 'react/jsx-runtime'

The old way of using `React.CreateElement` had a problem of having `React` in the import always and also this method had some performance problems.

So `jsx-runtime` was introduced and this compiles JSX to the below JS code.

```javascript
// Inserted by a compiler (don't import it yourself!)
import { jsx as _jsx } from 'react/jsx-runtime';

function App() {
    return _jsx('h1', { children: 'Hello world' });
}
```

## Tools used for compiling

### Babel

Babel compiler can be used to compile JSX to JS as described above.

### TypeScript

If using typescript, then `JSX` file are written as `TSX` files.
The `tsconfig.json` has a configuration to say which way must be used for compiling TSX to JS.

The config `jsx` can be `react` to compile to `createElement` or `react-jsx` to compile to use 'react/jsx-runtime' library.

## Why JSX

Generating HTML directly using plain JS is very error-prone and cumbersome.
Example - matching open/close tags, escape content, etc.
It is not only tough to write but also to read the code.

JSX has an HTML/XML based syntax. But it has nothing to do with HTML. But this makes it easy to write and understand.

It also provides the advantage where we can write pure/plain HTML directly in it and
also co-locate the String interpolation in the same place.

On compilation, it will generate a JS script which will in-turn generate the HTML block for that component.

:::tip
JSX does not directly create the HTML output. It only creates JS which is capable for generating the HTML.
:::

:::info
Information sources

1. https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
2. https://www.typescriptlang.org/tsconfig/#jsxFactory
3. https://dodov.dev/blog/origins-of-jsx-and-why-it-exists
