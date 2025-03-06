const { kafka } = require("./client");
const { KAFKA_BROKER, TOPIC_NAME, CLIENT_ID } = require("./config");
const logger = require("./logger");


async function sendLocationUpdates() {
    logger.info(`Connecting to producer...`);
    const producer = kafka.producer();
    await producer.connect();
    logger.info(`Connection to producer successful`);

    // Send message every second
    setInterval(async () => {
        const location = {
            driver_id: Math.floor(Math.random() * 10000),
            latitude: (37.70 + Math.random() * 0.1).toFixed(6),
            longitude: (-122.50 + Math.random() * 0.1).toFixed(6),
            timestamp: Date.now()
        };

        await producer.send({
            topic:TOPIC_NAME,
            messages: [{ value: JSON.stringify(location) }]
        })
        logger.info(`Sent: ${JSON.stringify(location)}`);
    }, 1000);
    // await producer.disconnect();
};

sendLocationUpdates();