# React Rendering Types

## CSR - Client Side Rendering

This is plain react so to say.

React without RSC & SSR is just a single JS file which contains all the logic.
DOM is updated once the JS is downloaded and executed.

The bundler (Webpack) generates this one single JS file, groups all assets such as images and style files.

## SSG - Static Site Generator

SSG occurs at build time. During the build time, all static HTML and client scripts are generated.

## SSR - Server Side Rendering

This is an existing feature of ReactJS. The server returns a static HTML and also a script.

:::info
In case of CSR, JSX is converted to JS and bundled. The bundle is executed on browser which then generates the HTML.
In case of SSR, JSX is converted to HTML on the server and returned directly to HTML on server.
:::

So the DOM is partially prepared already by the server generated HTML and
the script only adds additional handlers to handle user interaction.
This process of updating the HTML is called **Hydration**.

_Dan Abramov (Ex-React Team) says - Hydration is like watering the “dry” HTML with the “water” of interactivity and event handlers._

:::important
It's important to note that SSR simulates an environment for rendering a React tree into raw HTML.
It doesn't differentiate between server and client components, and it renders them the same way.
:::

**Problems with plain-old SSR** - All JavaScript should be downloaded on the client side before starting the hydration
and the hydration process should be completed before the page can become interactive.
Only then even the pre-rendered HTML can be displayed.

This is a “waterfall”: fetch data (server) → render to HTML (server) → load code (client) → hydrate (client).

Neither of the stages can start until the previous stage has finished for the webpage to be fully available for the user.

### New SSR in React 18

### Suspense

Solution to this problem is `Suspense`. It makes only parts of the page to be in `waiting` mode
while the page waits for data to be loaded.

Also, we must consider that for the dynamic components which need data from other sources (DB, API),
then the client script has to still run on the browser to fetch data.

:::info
Suspense allows to throw promises from React components when it needs something that's not ready yet
(fetching data, lazily importing components, etc).
These promises are caught at the **Suspense boundary**. This means, whenever a promise is thrown from rendering a Suspense sub-tree,
React pauses rendering that sub-tree until the promise is resolved, and then tries again.
:::

**Concepts of Suspense** - Streaming HTML (Pre-rendered and sent over the wire) and Selective Hydration.

1. Streaming Server Rendering - Progressively rendering HTML from the server to the client.
   Whenever suspended parts of the webpage are ready, React them streams the new HTML for this part of the webpage and
   also a script to update DOM.
2. Selective Hydration - React prioritizes what components to make interactive first based on user interaction.

Uses HTML streaming to sending updated HTML chunks as and when the data is processed on the server.

:::tip
More on HTML streaming can be found in this [page](../html-streaming).
:::

:::info
This concept is also called `flushing`.
In case of RSC, the skeleton or already static generated HTML is flushed out first.
After that the slow components are returned.
:::

### Useful Terms

1. _TTFB_ - Time to First Byte - When the first byte is received by the browser from web server. This isn't useful for the end user.
2. _FCP_ - First Contentful Paint - When the first HTML element is displayed. First effect to the end user that the webpage is loading successfully.
3. _TTI_ - Time To Interactive - When the webpage is responding to user interaction.

:::info
Content inspired and curated using

-   https://www.joshwcomeau.com/react/server-components/
-   https://github.com/reactwg/react-18/discussions/37 - A must-read for every beginner.
-   https://www.cloudflare.com/learning/performance/how-dcl-and-fcp-affect-seo/
-   https://www.plasmic.app/blog/how-react-server-components-work
    :::
