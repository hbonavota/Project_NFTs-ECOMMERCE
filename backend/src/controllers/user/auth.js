const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
const GOOGLE_CONSUMER_KEY='358006183934-fiu6bc9vqf0rcpgoksmd8mqfo9m8h9u8.apps.googleusercontent.com';
const GOOGLE_CONSUMER_SECRET= 'rCUOuj3ix3hjBp05VTBfRFHS';

passport.use(new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:8001/google/callback"
  },
  function(token, tokenSecret, profile, done) {
/*       User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, profile);
      }); */
      return done(err,profile);
  }
));

passport.serializeUser(function (user,done){
  done(null,user)
});

passport.deserializeUser(function(user,done){
  done(null, user);
})
