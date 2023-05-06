const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 1432;
const DB = 'mongodb+srv://aditya:masterootMern@mern.rtua7hm.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful with the database');
}).catch((err) => {
    console.log('error connecting with the database: ', err);
});

const middleware = (req, res, next) => {
    console.log("middleware is active");
    next(); // calls the next step (render the page)
}

app.get('/', (req, res) => {
    res.status(201).send('hi there');
});

// include middleware function b/w route and function so that middleware runs first and then the page renders
app.get('/about', middleware, (req, res) => {
    console.log('middleware allowed about page to render'),
    res.status(201).send('about page');
});
app.get('/login', (req, res) => {
    res.status(201).send('login page');
});
app.get('/register', (req, res) => {
    res.status(201).send('register page');
});
app.get('*', (req, res) => {
    res.status(404).send('error page');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});