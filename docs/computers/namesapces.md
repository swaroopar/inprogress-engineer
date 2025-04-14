# Namespaces

Namespaces is a concept which provides process isolation.
This means, the process which is started with its own namespace has its own set of users, 
resources, mount points and may more. 

It is a kernel feature where kernel allows userspace applications to run on isolated 
environments. 

:::important namespaces in docker
In case of docker, when a container is started, the Docker CLI reads the entrypoint from 
the Dockerfile and starts that application process in it's own namespace. 
:::