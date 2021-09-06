const User = require('../../models/User');
const jwt = require('jsonwebtoken');
async function register(req, res) {
    const {username, password, firstName, lastName} = req.body;
    let alreadyExist = await User.findOne({username : username})
    if(alreadyExist) return res.json({error : 'USER ALREADY EXISTS'})
    const newUser = new User({
        username,
        password,
        firstName,
        lastName
    })
    try {
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, 'milanesaconpure', {
            expiresIn: 86400
        })

        return res.json(`BIENVENIDO ${username}`);
        
    } catch (error) {
        console.log(error);
        return res.send(500);
    }
    
}

module.exports = register;