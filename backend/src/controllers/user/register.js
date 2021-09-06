const User = require('../../models/User');
const jwt = require('jsonwebtoken');
async function register(req, res) {
    const {username, password} = req.body;
    let alreadyExist = await User.findOne({username : username})
    if(alreadyExist) return res.json({text : 'USER ALREADY EXISTS'})
    const newUser = new User({
        username,
        password

    })
    try {
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, 'milanesaconpure', {
            expiresIn: 86400
        })

        return res.json(newUser);
        
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = register;