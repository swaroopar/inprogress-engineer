# Gradle Concepts

Since I have mostly worked with Maven,
it's important to understand basics of Gradle to use it in the right way.

1. **project** - This is the main object. All what we do in the Kotlin DSL files is to update this object.
1. **plugins** - They're the components with the main logic. They group 1:N tasks.
   Gradle runtime just executes plugin code.
1. **apply** and **plugin** - Adds tasks in the plugin to the project object.
1. **extensions** - Plugin properties that can be configured during the build.

![gradle-components](../../../static/img/gradle-components.excalidraw.png)

:::important build files are just configurations
The **build.gradle.kts** files are just having methods which configure the **Project** object at different levels.
The final and fully built **Project** object is what's then processed by Gradle as part of the build command.
:::

## Understanding .kts files

:::warning receivers in OOP
Receivers in OOP is the object on which the method is executed.
For example, in **this.executeFunctionName()**, **this** is the receiver.
:::

1. In Kotlin DSL, the receiver is configurable.
   Gradle configures this as 'Project' object.
   Hence all functions in the build files are just called without specifying the object.
2. Every argument to the function is again just an **anonymous function**.
   Important difference is that the type of the argument becomes the receiver of this function.
   Which means, all functions and variable assignments in this anonymous function
   will be executed with the argument object as **this**.

:::tip example for lambdas with receiver (anonynomous functions)

```kts
repositories { # repositories() is a method on project receiver.
The repositories method has defintion fun Project.repositories(configure: RepositoryHandler.() -> Unit)
    mavenCentral(); # mavenCentral() method is then executed with receiver as RepositoryHandler. Means repositoryHandler.mavenCentral();
}
```
:::

:::note Argument in groovy DSL
Arguments in groovy DSL are closures.
But in Kotlin DSL, they are just passed as function thats executed
:::

