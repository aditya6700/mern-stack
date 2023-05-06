const express = require('express');

const app = express();

const port = process.env.PORT || 1432;

app.get('/', (req, res) => {
    res.status(201).send('hi there');
});
app.get('/home', (req, res) => {
    res.status(201).send('home page');
});
app.get('/about', (req, res) => {
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