# Kafka Pull Model

In contrary to what RabbitMQ offers, kafka allows only consumers to pull messages from the brokers.

Kafka consumers send a **fetch** message which is then responded by the broker
with 1 or more available messages.

For each fetch request, the broker will return one fetch response which can indicate
that there are more messages available. In this case, the consumer must send a
new fetch request to get the remaining messages.

![kafka](../../static/img/kafka-pull.excalidraw.png)

:::important[Request supports multiple partitions]
In one fetch request, the consumer can request for data from multiple partitions as well.

In this case, the broker will group messages from requested partitions and return.
:::
