const middleware = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const Users = require('../models/userSchema');

// include middleware function b/w route and function so that middleware runs first and then the page renders
router.get('/about', middleware, (req, res) => {
    console.log('middleware allowed about page to render'),
    res.status(201).send('about page');
});
router.get('/login', (req, res) => {
    res.status(201).send('login page');
});
router.get('/register', (req, res) => {
    res.status(201).send('register page');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    const { username, email, phone, work, password, cpassword } = req.body;

    if (!username || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ message: "please fill all fields" });
    }

    Users.findOne({ email })
        .then((userFound) => {
            if (userFound) {
                return res.status(422).json({ error: 'A user already exists with same email' });
            }

            const user = new Users({ username, email, phone, work, password, cpassword });

            user.save()
                .then(() => {
                    res.status(201).json({ message: 'user created successfully' });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: 'failed to create user',
                        error: err
                    });
                })
        })
        .catch((err) => {
            res.status(422).json({
                message: 'unknown error',
                error: err
            });
        });
});


module.exports = router;