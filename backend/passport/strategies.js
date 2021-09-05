const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const database = require('../database2');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

/**
 * Registers all passport authentication strategiess
 *
 * @param {Object} passport - passport object
 */
exports.register = (passport) => {
  const callbackURL = 'http://localhost:8001/auth/google/callback'

    // Use Google oauth2 strategy
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL,
      },
      (accessToken, refreshToken, data, done) => {
        // Find user email in mock database
        console.log("data",data)
        const user = database.users.find((user) => user.email === data._json.email);
        console.log("data._json",data._json)
        if (user) return done(null, user);

        return done();
      }
    ));
};
