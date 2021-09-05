const redis = require('redis');
const { promisifyAll } = require('bluebird');

let clientInstance;

function getClient() {
  if (!clientInstance) {
    initialize();
  }
  return clientInstance;
}


function initialize() {
  if (!clientInstance) {
    clientInstance = promisifyAll(redis.createClient({ port : 6379, host : 'localhost' }));
    clientInstance.on('connect', () => {
      console.log('Redis client connected');
    });
    clientInstance.on('error', err => {
      console.error(`Error on redis client  ${err.toString()}`);
    });
  }
  return getClient();
}

module.exports = { initialize, getClient };