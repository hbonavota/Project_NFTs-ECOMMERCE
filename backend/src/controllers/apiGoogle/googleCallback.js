const passport = require('passport');

function googleCallback(req, res, next) {
    try {
        passport.authenticate('google',{
            successRedirect: '/protected',
            failureRedirect: '/auth/failure',
        })

    } catch (error) {
        next(error);
    }
}

module.exports={
    googleCallback
}
