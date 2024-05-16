# Vite

Vite is a combination of multiple things.

1. Bundler
2. Transpiler
3. Development server

Vite handles development server and production build differently.

## Native ES Modules (Native ESM)

Native ES modules are nothing but the regular JS modules where we write multiple JS files (a.k.a modules) and
import them in other files.
Browser's JS runtime environment supports this.

:::tip
If you see the current bundlers such as Webpack, they **bundle** all dependencies and code into one single file.
This means the native ESM functionality isn't used in this case.
:::

## Vite in Development

Vite handles development and production environments differently. In the local environment, it doesn't bundle anything.
It uses Native ESM based development server.

## Vite in Production

In case of production build, it still generates bundles.
Uses `esbuild` to generate bundle from dependencies in `node_modules` and `rollup.js` for actual source code bundle.

:::important
Vite doesn't use `tsc` to transpile TS(X) to JS. Instead, uses `esbuild`.
Also it doesn't do type-check. Only transpiles code to JS.
:::
