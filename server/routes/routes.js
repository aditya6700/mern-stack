const middleware = require('../middleware/auth');
const express = require('express');
const router = express.Router();

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
        if (!userFound || userFound.password !== password) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        res.status(200).json({ message: 'login success' });

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