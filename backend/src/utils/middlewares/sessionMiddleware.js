const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { getClient } = require('../../redis/index');

// TODO: See the subject of prop 'resave', MG ha left it to true, MP change it to false by persistence problems with joker.
const sessionConfig = {
  name: 'NFT_id',
  genid: () => uuidv4(),
  saveUninitialized: true,
  proxy: true,
  resave: false,
  rolling: true,
  secret : 'hola mundo',
  store: new RedisStore({
    client: getClient(),
    prefix: '-session:',
    logErrors: error => {
      try {
        console.error(`[REDIS_STORE][SESSION]`);
        console.error(error);
      } catch (e) {
        console.error(`[REDIS_STORE][SESSION][ERROR] ${e.message}`);
      }
    },
  }),
  cookie: {
    /**
     * 90 minutes of session. Because the rolling option is set to true,
     * the maxAge will be reseted in every request to the original value (90 min).
     * This means that the user session will expire on 90 minutes of inactivity.
     */
    maxAge: 60000 * 90,
    httpOnly: false,
    sameSite: 'lax', 
    secure: false
  },
};

module.exports = session(sessionConfig);