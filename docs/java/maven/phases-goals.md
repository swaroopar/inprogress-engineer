# Maven Phases and Goals

Phases are a fixed set of stages in the build lifecycle defined by the Maven framework.

:::important can't skip previous phases
When you run a specific phase of Maven,
it will always run all the previous phases in the lifecycle.
There is no way we can skip it.

Example - running install will run all the phases before it first and
then run install
:::

## Goals

Goals are custom user-defined names inside a Maven plugin.
If a plugin can do multiple things, we can separate them with different goals.

![maven-plugins](../../../static/img/maven-phase-goal.excalidraw.png)

:::tip Plugins are everything
Maven binary itself can't do anything without plugin. Not even compile.

The binary itself only parses POM, downloads all dependencies and then lets it to plugin to handle everything.
:::

## Plugin Group IDs

Every plugin has an unique group ID similar to dependencies.
When a plugin is executed, the plugins are downloaded from the plugin repositories defined in the POM file or settings.xml.

:::important Default Group Ids
When you run **mvn versions:set** command, it will use the default group ID of `org.apache.maven.plugins` to search for the plugin.

Maven has a list of default group IDs in which it searches for plugins.
This list can be extended in the **settings.xml** file.
:::
