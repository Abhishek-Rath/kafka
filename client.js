const {Kafka} = require('kafkajs');

const { KAFKA_BROKER, CLIENT_ID } = require('./config');

exports.kafka = new Kafka({
    clientId: CLIENT_ID,
    brokers: [KAFKA_BROKER]
});