# Storage

In Kubernetes, storage has multiple concepts which represent the entire storage lifecycle.

1. **Provisioner** - Main controller which handles provisioning of storage.
   It handles creating of storage on the underlying infrastructure.
2. **Storage Class** - Represents different types of storage available.
   Depending on storage class requested, different provisioners will handle the request.
3. **Persistent Volume Claim** - Request for storage by a user.
4. **Persistent Volume** - Actual storage resource created on the infrastructure.
   Every persistent volume claim will be bound to a persistent volume.
5. **Driver** - It's the controller that implements the Container Storage Interface (CSI) specification.
   It's running on each node and is responsible for mounting and un-mounting volumes to/from nodes.

![k8s-storage-components](../../static/img/k8s-storage-building-blocks.excalidraw.png)

:::important PV is dynamically created
When a Persistent Volume Claim (PVC) is created, the Provisioner dynamically creates a Persistent Volume.
The user need not create a Persistent Volume (PV) manually.
:::

## Storage Class

This is similar to what we saw in [ingress](ingress.md).
Every storage class represents a different provisioner.

:::info Default storage class
Every cluster has a default storage class.
Every PVC created without specifying a storage class will use the default storage class.
:::
