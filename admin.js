const { kafka } = require('./client');

const { TOPIC_NAME } = require('./config');

const { logger } = require('./logger');

async function init() {
    const admin = kafka.admin();
    logger.info(`Connecting to Admin...`);
    await admin.connect();
    logger.info(`Conneted to admin successfully`);

    // Create Topic
    logger.info(`Creating topic: ${TOPIC_NAME}`);
    try {
        await admin.createTopics({
          topics: [{ topic: TOPIC_NAME, numPartitions: 3, replicationFactor: 1 }]
        });
        logger.info(`Topic '${TOPIC_NAME}' created successfully.`);
      } catch (err) {
        logger.warn(`Topic creation failed: ${err.message}`);
      } finally {
        await admin.disconnect();
      }
};

init();