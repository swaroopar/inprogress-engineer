# React Server Components

RSC and SSR are two different approaches to same problem. In SSR, the HTML is generated on the server and
returned to browser together with a small script which has the logic to define where the HTML must be inserted.

In case of RSC, the server components are returned as JSX instead of HTML. The JSX is converted to JSON and returned to client.

:::note
Components in RSC can be also async.
:::

## RSC streams JSX

Most important mental model about RSC is, the server components aren't rendered as HTML on the server (except the first render).
Instead, the JSX is serialized to JSON and streamed to the client. The client then uses the updated JSX received from
server and then the `react client` uses the regular way to render the received JSX and generate the difference and
update DOM.

So what RSC streams contains no react components. It streams only raw HTML tags.

Similar to SSR, in RSC the JSX for full tree isn't sent out in one big chunk. The servers will stream the JSX in chunks as
and when it's available.

Only the initial JSX is sent together with first render HTML.

### Why Streaming JSX

With SSR, the HTML was streamed directly. But with RSC, a new JSON based payload was defined.

This is necessary since the server always renders the full HTML and this will rewrite everything on the DOM and
we will lose state when browse through the webpage.

And for React to know and change only the exact elements that has changed, it must know the full react tree.
Constructing a React tree out of HTML is a heavy operation. Instead, the React tree is generated on the server,
and it's directly sent.

What this means is, the first page in RSC is an SSR generated HTML but together with this, RSC also ships the root
JSX for this page. And all subsequent JSX received from server will be used to update this original root JSX and
eventually also the DOM. Using this, the state isn't lost, and React only replaces/adds components which were newly received
in the streamed JSX.

#### Advantages

1. API calls need not be generated from browser. It can happen directly from the server.
2. Heavy NPM packages aren't anymore part of the client bundle. The packages are only on the server,
   and they're directly used on server to render components.

### Stringify JSX Data a.k.a RSC Payload

1. By default, the root component is always a server component in RSC.
2. And by default, every component is a server component. Only client components must be explicitly declared using the
   `use client` directive.
3. Client components are simply exported as regular client scripts as it's done with CSR.
4. The RSC payload contains the
    - JSX serialized data for server components
    - Placeholders for scripts of client components which are used in the server component.
    - Scripts of client components.

:::tip
The JSX is serialized using the same `React.CreateElement()` function to get the serialized form of JSX. The same
React client library is used here to generate it. It will recursively go from the requested route to the inner most
component to generate the complete React tree.
:::

```mermaid
    mindmap
        Root Page
            child server component 1
                child server component 2
                child server component 3
                    child client component 4

```

## Client Boundary

The boundary starts from any component that has the `use client` directive. It then covers all imports the file has.

So as long as the client component has very small and minimal imports, the boundary is limited.

## RSC with SSR

RSC and SSR are two complementing features and is used together. For example, if React knows that a particular server
component depends only on static data, then it will directly render HTML.

:::tip
**React Client** is any software that consumes the out of a **React Server**. It need not be a browser.
For example, SSR consumes the output of RSC and generates HTML. So even SSR is considered as a React Client.
:::

:::info
content inspired and curated from

-   https://github.com/reactwg/server-components/discussions/5
-   https://www.plasmic.app/blog/how-react-server-components-work
-   https://www.mux.com/blog/what-are-react-server-components
    :::
