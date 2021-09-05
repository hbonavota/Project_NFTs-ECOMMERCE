const { users } = require("../database2");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    // Store the userId in the session so we can retrieve it later
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // Find user in database by stored session userId
    const user = users.find((u) => u.id === id);
    if (!user) return done('User not found');

    // Find user
    done(null, user);
  });
};