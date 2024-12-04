# Modules

A module in JavaScript is just any file containing JavaScript code.
Then we share/access code from different modules using **import/export** or **require/export**.

## CommonJS

CommonJS module is where we use **export and require** keywords to share code between modules.

Files can be explicitly have `.cjs` extension to say that the code is written in CommonJS format.

:::important[First Module Framework]
This is the module framework created by Node and wasn't intended to work on browser.
Basically used by server-side applications. Browsers don't support this.

This was the first module system in the JavaScript ecosystem.
:::

## ES Modules

ES Modules is the latest form of modules where we use **import and export** key words to
share code between modules

Files can be explicitly have `.mjs` extension to say that the code is written in ES Module format.

This specification was created by the ECMA for supported modules (multi-file) scripts in browser.

:::danger[Naming Convention]
In case of ES Module, it called just `module`. That's also why the files have extension `mjs` and also package.json have type value as `module` or `commonjs`.
:::

## Type Field in Package.json

The **type** field in package.json is used by bundlers and NodeJS to parse files.
But this is an **optional** field.

:::tip
This field is used by NodeJS directly parse and execute files on the server.
The same field is also used by bundlers to compile and transpile files.
:::

## Module Format Detection

Since the **type** field isn't a mandatory configuration parameter,
there are certain rules to detect which module type is used by a file.

- file extensions `.mjs` and `.cjs` are always interpreted as ES module and CommonJS modules respectively.
  This is irrespective of what's configured in package.json
- If file extension is just `.js` then the **type** nearest package.json is used.
- If the file extension is just `.js` and the **type** field doesn't exist in nearest package.json then it's by **default** assumed to be CommonJS.

:::tip
Default is still the CommonJS because CommonJS was the first module system.
ES Modules came later.
:::

## CommonJS vs ES Modules

As explained earlier, CommonJS was intended for server-side applications and
is **synchronous**. This means, all dependent files are synchronously loaded by the
NodeJS runtime as and when it comes across in the code.

Where as ES modules are **asynchronous**. This means, the runtime (browser or server) can request multiple files in parallel.

## Life Before Modules

When NodeJS was created to run JavaScript on servers,
they created the first module system called CommonJS.
This lead to also build the package manager system called **NPM**.

### AMD - Asynchronous Module Definition / RequireJS

To catch up with Node, AMD was created for browsers.
But had a different syntax compared to CommonJS.
Due to this, none of the NPM packages could be used in browser specific JavaScript code.

To solve this problem, [browserify](https://browserify.org/) was created. This is the
first bundler of sort which transpiled CJS code to AMD code and
also bundled code to one single file.

:::info
https://8thlight.com/insights/a-history-of-javascript-modules-and-bundling-for-the-post-es6-developer
:::
