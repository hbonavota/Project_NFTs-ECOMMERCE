const LocalStrategy = require('passport-local').Strategy;


const localStrategy = new LocalStrategy(
  { passReqToCallback: true },
  /**
   * Get executed by the user controller to authenticate a user.
   * The responsibility of this function is only to authenticate the user
   * against Mobile Service.
   */
  (req, username, password, done) => {
      console.log('username =>',username);
      if(username=='dani') {
        console.log('done =>',done);
        return done(null, {text : 'username dani'})
        }; 
      return done('errorrrrrrrrrrr'); 
    // // login({ userName: username, password, countryId, axios, loginFrom }).then(
    //   response => {
    //     if (!response.success) return done(response.error);

    //     return done(null, response.data);
    //   },
    // );
  },
);

module.exports = localStrategy;