# Referer and Referrer-Policy

## Referer

This the HTTP request header set by the browser so that the web server then knows from where's the request coming from.

## Referrer-Policy

This is the HTTP response header returned by the webpage when it loads.
It's then used by browser to decide what value must be set in the _referer_ header for subsequent requests.

:::tip[For Browsers]
These Referrer-Policy headers are used by browsers to then decide what value must be sent in the request.
:::

![referer workflow](../../static/img/referer.excalidraw.png)

## Referrer policy in HTML

1. We can directly set it at HTML level. Then this referrer policy will be used by browser.
2. Or in other HTML elements such as a, img, script, link and area.
