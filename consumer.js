const { kafka } = require("./client");
const { KAFKA_BROKER, TOPIC_NAME, GROUP_ID } = require("./config");
const logger = require("./logger");

// const kafka = new Kafka({ brokers: [KAFKA_BROKER] });

async function consumeMessages() {
    logger.info(`Connecting to consumer...`);
    const consumer = kafka.consumer({ groupId: GROUP_ID });
    await consumer.connect();
    logger.info(`Connection to consumer successful`);

    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ message }) => {
          logger.info(`Received: ${message.value.toString()}`);
        }
      });
};

consumeMessages();