const middleware = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/userSchema');

// include middleware function b/w route and function so that middleware runs first and then the page renders
router.get('/about', middleware, (req, res) => {
    console.log('middleware allowed about page to render'),
    res.status(201).send('about page');
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ message: "enter both email and passowrd" });
    }

    try {
        
        const userFound = await Users.findOne({ email });
        if (userFound) {
            const passMatch = await bcrypt.compare(password, userFound.password);
            if (passMatch) {
                return res.status(200).json({ message: "Login Success" });
            } 
            else {
                return res.status(400).json({ error: "Invalid Credentials" });
            }
        }
        else {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

    } catch (err) {
        res.status(422).json({
            message: 'unknown error',
            error: err
        });
    }
});

router.post('/register', async (req, res) => {
    
    const { username, email, phone, work, password, cpassword } = req.body;

    if (!username || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ message: "please fill all fields" });
    }
    else if (password !== cpassword) {
        return res.status(422).json({ message: "password and confirm password must be same" });
    }
    
    try {

        const userFound = await Users.findOne({ email });
        if(userFound) {
            return res.status(422).json({ error: 'A user already exists with same email' });
        }

        const user = new Users({ username, email, phone, work, password, cpassword });
        try {
            const userCreated = await user.save();
            if (userCreated) {
                res.status(201).json({
                    message: 'user created successfully',
                    data: userCreated
                });
            }
        } catch (err) {
            res.status(500).json({
                message: 'failed to create user',
                error: err
            });
        }

    } catch (err) {
        res.status(422).json({
            message: 'unknown error',
            error: err
        });
    }
});


module.exports = router;