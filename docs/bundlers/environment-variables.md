# Environment Variables

Environment variables are handled very differently in the frontend applications when compared to backend applications.
The is mainly due to the fact that the frontend applications run on browser and on the browser there isn't concept of
environment variables.

## Variables at Build Time

One possibility is to set environment variables during the build time on the build machines.
Then the bundler will already use this values and replace them in the the client files generated.

:::danger
The problem with this approach is that, if we plan to run the application on different environments,
then we need to build the application separately for each environment and
if we release docker images, then we must also then build one image for each environment.
:::
