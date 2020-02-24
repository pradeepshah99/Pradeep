const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = express.Router();
const bodyParser = require('body-parser');
const userSchema = require('../models/schema').regSchema;
const bcrypt = require('bcryptjs');
app.use(bodyParser.text());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

route.post('/login', (req, res) => {
    jsonParse = JSON.parse(req.body);
    console.log(jsonParse)
});







module.exports = route;