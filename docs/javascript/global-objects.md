# Global Objects

In JavaScript, global objects are the one that's accessible from anywhere within the application
without adding any **imports**.
Properties of this global object can be accessed directly without

This is the object created automatically when the JavaScript execution starts.
Since JavaScript is a interpreted language, the global object is created at the start of the execution of this interpreter.

In case of browser, the global object is created with the name **window** and on NodeJS it's called as **global**.
We can add new properties to this object and then access across different files.

:::tip[Built-In Features]
Mostly built-in features of JavaScript are available in the global object..
Example `console` object.

When the session of the JavaScript starts, it adds all necessary variables and functions to the global object.
:::

## Script vs Modules

In JavaScript, scripts are just standalone files. Any import and export statements will cause syntax error in this case.

:::warning[Global Object]
Global object is only available on the scripts by default and all top-level `var` variables are directly added to the
global object by default.
:::

## How many global objects exist in browser

Ever browser tab has one and only one **Global Execution Context** and this exists until the browser page is closed.
This means, there is only one Global object created.

Even if multiple `script` tags exist in the HTML page, still all are executed under the same Global object.

:::info[Useful Links]

- https://stackoverflow.com/questions/3735406/how-many-javascript-programs-are-executed-for-a-single-web-page-in-the-browser
- https://docstore.mik.ua/orelly/webprog/jscript/ch12_03.htm
  :::
