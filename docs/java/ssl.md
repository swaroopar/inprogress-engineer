# SSL

KeyStore - Used to store the application's own keys.

1. These are keys returned when the client starts the HTTPS session to the application.
2. The same keys are used when the application makes an HTTPS call and the server asks
   for the client certificates.
   Truststore - Used to store all known and trusted certificate authorities.

:::info default trust store
The default trust store is the one that's available in JRE.

If we want to use any private or self-signed certificate authorities,
then we must use a custom truststore.
:::

## Trustmanager

This is the component that's executed whenever an SSL request comes in.
There is a default trustmanager implementation in Java SDK.
We must add a custom trustmanager if we want to add any additional checks
during the SSL handshake.

## Certificate vs Keys

SSL has two parts - Certificate and Keys.
The certificate is used to validate the server
and then the public key in the certificate is used to encrypt the data.

The server then has the private key which was received when the SSL certificate was issued,
to decrypt the data.

## File formats

Formats such as .pem, .key, .crt, .csr, .p12 hold different types of data.
Some have certificates only and some have private or public keys or even all 3 information.

![SSL](../../static/img/java-ssl.excalidraw.png)
