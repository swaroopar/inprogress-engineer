# HTML Streaming

## Basics of HTML Streaming

Streaming HTML is the concept where web server doesn't send the complete HTML in the first go.
Instead, only chunks of data is sent.
Important is that the modern web servers can already handle such chunks of webpage.
Browser can already start painting the page when it receives a partial webpage.

:::info
This concept is also called **flushing**.
In case of RSC, the skeleton or already static generated HTML is flushed out first.
After that the slow components are returned.
:::
