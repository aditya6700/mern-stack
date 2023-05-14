const jwt = require('jsonwebtoken');
const Users = require('../models/userSchema');

const authenticate = async (req, res, next) => {
    try {
    
        // token is stored in request and 'jwtoken' is the token name which we set
        const token = req.cookies.jwtoken;

        console.log('second line - ', token);

        // verifying the token using the secret key
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        
        // verifing user with the token saved in cookie with our secret key
        const user = await Users.findOne({ _id: verifyUser._id, "tokens.token": token });
        console.log(user);

        if (!user) {
            throw new Error('User not found');
        }
        
        req.user = user;
        req.userId = user._id;
        req.token = token;

        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).json({
            message: "UnAuthorized user",
            error: err
        });
    }
}

module.exports = authenticate;