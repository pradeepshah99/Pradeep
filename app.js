const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.text());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/nodeDb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))


var registerPage = require('./routes/register.js');
app.use('/api/auth', registerPage); // /api/auth/register

var loginPage = require('./routes/login.js');
app.use('/api/auth', loginPage); // /api/auth/register

app.listen(5400, () => console.log('Server is listening on port 5400...'));