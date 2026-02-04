# ACID

1. **Atomicity** - All operations in a transaction are treated as one bundle.
   Which means, all operations in the bundle will succeed or fail together.
2. **consistency** - Database will always be in a valid state
   before and after the transaction.
   This means, any data written to the database must be valid according to all defined rules,
   including constraints, PK, FK, cascades, and triggers.
   So only valid data will be written to the database.
3. **isolation** - Concurrent transactions won't interfere with each other.
   Which means, any uncommitted transactions won't be visible to other transactions.
4. **durability** - Once a transaction is committed, it will remain so,
   even in the event of power loss, crashes, or errors.

:::warning Atomicity meaning
Keep in mind that atomicity in case of programming is different
compared to atomicity in case of databases.
See [Atomic Variables](../java/atomic.md) for more details.
:::

## Mental model to remember

Just use a bank transaction to remember the concepts of ACID.

- Atomicity - If you transfer money from one account to another,
  either both accounts will be updated or neither will be updated.
- Consistency - Transaction done if the account really has money.
- Isolation - If two people are transferring money at the same time,
  the transactions won't interfere with each other.
  Each transaction must ensure they see the most up-to-date data.
- Durability - Once the transaction is done, the money will be there,
  even if there is a power failure or crash.
