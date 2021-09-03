const passport = require('passport');

function authFailure(req, res, next) {
    try {
        res.send('Something went wrong...');
    } catch (error) {
        next(error);
    }
}
module.exports={
    authFailure
}


