# Spatial Indexes

Regular B-Tree indexes are 1-dimensional indexes.
They're efficient to hold data that are just single values.

Spatial values are multi-dimensional values.
Meaning each value has multiple dimensions such as x and y co-ordinates in a 2D space.
This is where spatial indexes come into the picture.

:::info Spatial index data structures
Spatial index data structures efficiently stores the data itself in it.

It's stored in such a way that searching for a value in a space becomes easy.
This is exactly also what [vector databases](../ai/embedding-models.mdx) do.
:::

:::tip Real life use cases

- Geographical data such as locations, maps, and GPS coordinates.
- Uber uses it's own spatial index called H3 to store the location data of the drivers and riders.
  :::
