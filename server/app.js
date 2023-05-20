const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');

// setting config file to make credentials secure
dotenv.config({ path: './config.env' });
require('./db/conn');

const port = process.env.PORT || 1432;
const app = express();

// to parse incoming json for post req
app.use(express.json());

// to parse incoming cookie
app.use(cookieParser());

// define home route
app.get('/', (req, res) => {
    res.status(201).send('hi there');
});

// setting up routes.js
app.use('/api', routes);

// redirect to error page for undefined routes
app.get('*', (req, res) => {
    res.status(404).send('error page');
});

// tell app to listen on mentioned port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});