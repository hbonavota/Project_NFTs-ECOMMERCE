const passport = require('passport');
const { loginUser } = require('./loginUser');
const authenticate = (callback) => passport.authenticate('local', callback)
const localStrategy = require('../auth/middlewares/localStrategy');
/**
 * Authenticates the user with the Authentication Middleware (passport Local Strategy)
 * The Authentication Middleware returns the user or err if there is any error in the
 * authentication process.
 * The middleware gets the username and password from the req.body object.
 */
passport.use('local', localStrategy);

function login(req, res, next) {
  authenticate(async (authError, user) => {
    try {
      if (authError) {
        res.status(401).send(authError);
      } else {
        // const loggedUser = await loginUser(req, user);
        console.log('user => ', user);
        res.send({ data: user });
      }
    } catch (e) {
      res.sendStatus(500);
    }
  })(req, res, next);
}

module.exports = login;