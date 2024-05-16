# React Rendering Types

## CSR - Client Side Rendering

This is plain react so to say.

React without RSC & SSR is just a single JS file which contains all the logic.
DOM is updated once the JS is downloaded and executed.

The bundler (Webpack) generates this one single JS file, groups all assets such as images and style files.

## SSG - Static Site Generator

SSG occurs at build time. During the build time, all static HTML and client scripts are generated.

This is suitable only for static websites such as blogs, news, etc.

## SSR - Server Side Rendering

This is an existing feature of ReactJS. The server returns a static HTML and also the
complete React client code.

This is explained in detail [here](./server-side-rendering).

## RSC - React Server Components

This is explained in detail [here](./rsc).
