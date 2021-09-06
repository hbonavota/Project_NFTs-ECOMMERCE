const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../models/User')


const localStrategy = new LocalStrategy(
  { passReqToCallback: true },
  /**
   * Get executed by the user controller to authenticate a user.
   * The responsibility of this function is only to authenticate the user
   * against Mobile Service.
   */
  async(_req, username, password, done) => {
      // console.log('username =>',username);
      const found = await User.findOne({username, password});
      console.log(found);
      //if(found) return done(null, found)
      //return done('no autorizado gil')

      if(found) {
        // console.log('done =>',done);
        return done(null, {success : "HOLA USUARIO", username})
        }; 
      return done({error: 'VALIDATION FAILED'}); 
    // // login({ userName: username, password, countryId, axios, loginFrom }).then(
    //   response => {
    //     if (!response.success) return done(response.error);

    //     return done(null, response.data);
    //   },
    // );
  },
);

module.exports = localStrategy;