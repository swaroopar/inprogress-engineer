# Vite

Vite is a combination of multiple things.

1. bundler
2. transpiler
3. development server

Vite handles development server and production build differently.

## Native ES Modules (Native ESM)

Native ES modules are nothing but the regular JS modules where we write multiple JS files (a.k.a modules) and
import them in other files.
Browser's JS runtime environment supports this.

:::tip
If you see the current bundlers such as webpack, they **bundle** all dependencies and code into one single file.
This means the native ESM functionality is not used in this case.
:::

## Vite in Development

Vite handles dev and production differently. In the local environment, it does not bundle anything.
It uses Native ESM based dev server.

## Vite in Production

In case of production build, it still generates bundles.
Uses `esbuild` to generate bundle from dependencies in `node_modules` and `rollup.js` for actual source code bundle.
