# Sharding vs Partitioning

Sharding is about scaling databases by distributing data across multiple machines.
There are two main strategies for this: sharding and partitioning.

## Sharding

Sharding involves splitting a large database into smaller, more manageable pieces called shards.
Each shard is a separate database that holds a subset of the data.
Sharding is typically done based on a specific key, such as user ID or geographic location.
Each shard can be hosted on a different server, allowing for horizontal scaling.

## Partitioning

Partitioning, on the other hand, is about dividing a single database into smaller, more manageable pieces called partitions.
Partitions are usually created based on a specific criterion, such as date ranges or categories.
Unlike sharding, all partitions are part of the same database and are typically hosted on the same server.
Partitioning helps improve query performance and manageability within a single database instance.
