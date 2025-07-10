# Self Sovereign Credentials

## Verifiable Credential

A verifiable credential is nothing but a credential that can be verified by a 3rd party without asking the issuer.

:::important similar to PKI infrastructure
In case of SSL, the certificates issued by a CA is blindly trusted.

But in SSI, the certificate can be verified against a public, distributed record,
without asking the issuer again.
:::

![ssi-workflow](../../static/img/ssi.excalidraw.png)

:::tip Credentials are sent in plain text
When credentials such as a degree certificate or drivers license is sent to a verifier,
it's sent as plain text. The data itself isn't encrypted.

This is why [digital signatures](../security/digital-signatures) are used for this purpose.
:::

## DID

DID stands for Decentralized Identity.
Normally identities are centralized which means the credentials are stored on a central server.

1. DID can already contain a key which already has its public key information.
2. Or the Information can be stored in a block chain and can be fetched using the ID.
3. Or the information can be stored in a central registry.
