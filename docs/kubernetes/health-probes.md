# Health Probes

There are two types of probes possible - **Liveness** and **Readiness**.

- **Liveness** - this means we only check if the port is really reachable from outside the pod.
- **Readiness** - This means we check if the app is full up and can really start accepting requests.
  Only when this is true, the endpoint of the pod is added to the service.
  Until then no request will read the pod.

:::important Liveness and Readiness are the same in some cases
In frameworks like tomcat, the server is available on the port only when the complete initialization is complete.
This means, when the application ready, it's also live.
But this isn't true for all cases.

For example, even in tomcat the server maybe fully started but we can implement custom readiness probes,
where we can additionally check if certain required microservices are reachable or not and decide the readiness answer.
So such case, the app is live but it's not yet ready to really serve requests.
:::
