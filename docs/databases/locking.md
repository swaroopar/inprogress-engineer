# Locking

Locking in database is a feature where we can request data set to be locked by the database
for concurrent transactions.

The default lock type is - Reads allowed for concurrent transactions
but write allowed to only one transaction at a time.

:::danger No checks in this lock
In the default locking mechanism, the writes are only done serially.
There are no checks if the queued updates are making any changes
that could be writing unwanted changes.
:::

:::tip Readers-Writer Lock
This default locking mechanism of a database is called
[Readers—writer lock](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock)
:::

## Optimistic Locking

It's the locking mechanism that happens at **application level**.

:::tip why the name optimistic
It's called so because this locking mechanism is very optimistic
and assumes that the race condition would occur very rarely.
:::

### Version or Timestamp Column

This is implemented by using an extra version or timestamp column.

The application then uses this column to ensure the row being updated
isn't already updated by another concurrent transaction.

## Pessimistic Locking

It's the locking mechanism implemented by the **database** itself.
But the application must control the database on how it must be applied.

### SQL syntax

By using special SQL syntax by the application, specific datasets can be locked.

::: danger SQL server specific
These aren't common syntax.
Each SQL server has a different implementation of the pessimistic locking concept.

:::
