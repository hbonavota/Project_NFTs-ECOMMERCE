// const User = require('@commons/models/User');

function loginUser(req, user) {
  return new Promise((resolve, reject) => {
    req.login(user, loginError => {
      if (loginError) {
        reject(loginError);
        return;
      }
      //console.log('session ',req.session)
      // console.log(`[USER_LOGIN] ${user.id} ${user.email}`);
      resolve(req.user);
      // console.log('req.user => ',req.user)
    });
  });
}

module.exports = { loginUser };