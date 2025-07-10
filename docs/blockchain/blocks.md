# Blocks

Blocks are nothing but a group of transactions that's
always added to the end of chain.
It's called a **chain** because a block always contains the information of the previous block and
this forms the chain.

:::important chain is chronological
The chain is sorted in chronological order and
this is ensured by always adding the new block only at the end of the chain.
:::

## Main USP

The main USP of block chain technology is the **trustless** and **no single authority**.

:::warning peer to peer
**Peer-to-Peer** in a block chain has two meanings

- Direct transactions between two parties.
- underlying bitcoin network also works peer-to-peer.
  No central controlling system.
  :::

## Validation

The validating nodes must validate and approve the blockes generated.
Normally not all validating nodes must approve.
The protocol or the framework might say that at least 2/3 rd of the full node must approve.

If any node doesn't approve, the block is discarded and not added to the chain.
