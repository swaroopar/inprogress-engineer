# Lazy Loading

Lazy Loading feature of React helps in code-splitting.
It lets the bundlers generate different chunks for each lazy imported component and use `Suspense` to
render a fallback component until the lazy loaded script is being loaded.

:::important
We must note that the lazy loading is only for client to load scripts in small sizes.
Rendering still happens on the client only.
:::
