# Blocks

Blocks are nothing but a group of transactions that's
always added to the end of chain.

It's called a **chain** because a block always contains the information of the previous block.

:::important chain is chronological
The chain is sorted in chronological order and
this is ensured by always adding the new block only at the end of the chain.
:::

## Main USP

The main USP of block chain technology is the **trustless** and **no single authority**.

:::info peer to peer
**Peer-to-Peer** in a block chain has two meanings

- Direct transactions between two parties.
- underlying bitcoin network also works peer-to-peer.
  No central controlling system.
  :::

## Handle final balances

The transactions are spread across multiple blocks.
So in case of an bank account, the final balance of an user isn't stored anywhere.
It must be calculated from the entire history of transactions.

:::tip frameworks handle it differently
Even though the history is in the full chain,
the frameworks implement a different caching or calculating mechanism,
where the final balances are also calculated and stored in the separate place and
the address of this information is linked in the block headers.
:::

## Validation

The validating nodes must validate and approve the nodes generated.
Normally not all validating nodes must approve.
The protocol or the framework might say that at least 2/3 rd of the full node must approve.
