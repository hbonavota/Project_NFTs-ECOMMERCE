const passport = require('passport');

function isAuthenticated(req, res, next) {
    try {
        passport.authenticate('google'), { scope: ['email', 'profile'] }
    } catch (error) {
        next(error);
    }
}
module.exports={
    isAuthenticated
}
