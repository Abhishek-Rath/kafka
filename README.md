# kafka

# Setup on Local

- Start Zookeeper Container

```
docker run -p 2181:2181 zookeeper
```

- Spin up the kafka container

```
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=2 \
confluentinc/cp-kafka
```

- Start producer
```
node producer.js
```

- Start consumer
```
node consumer.js
```

### Blog Link
https://abhishekrath.substack.com/publish/post/158525343