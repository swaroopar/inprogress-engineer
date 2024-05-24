# Babel vs Webpack

Babel is a compiler whereas Webpack is a bundler.

## Babel

Compiler/Transpiler for generating JS from different sources. Or even covert syntax between different versions of JS.

For example, converting the code written in latest JS version to old version such that the app runs even on old browsers.

:::tip
Babel can even compile TS to JS. We need not use always `tsc` for it.
:::

## Webpack

Used to generate the final files that will be used in the browser. Some tasks the Webpack can do

1. Transpile TS to JS using Babel or tsc or any other tool as required.
2. Merge/split CSS files
3. Merge/Split JS files.
4. Bundle images
5. Invoke Babel to generate files.

:::info
CRA doesn't use `tsc` in its Webpack configuration for compiling TypeScript. It uses Babel instead.
:::
