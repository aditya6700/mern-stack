const middleware = require('../middleware/auth');
const express = require('express');
const router = express.Router();


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
    res.status(201).send({
        message: req.body,
    });
});


module.exports = router;