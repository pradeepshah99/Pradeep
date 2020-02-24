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



route.post('/register', (req, res) => {
    var jsonParse = JSON.parse(req.body);
    const fName = jsonParse.firstname;
    const lName = jsonParse.lastname;
    const mail = jsonParse.email;
    const pwd = jsonParse.password;

    reg = new userSchema({
        //id : 101,
        firstName: fName,
        lastName: lName,
        email: mail,
        password: pwd
    });

    var userInfo = {
        firstName: fName,
        lastName: lName,
        email: mail
    }

    userSchema.findOne({ email: mail }).exec()
        .then(result => {
            if (result) {
                res.json({
                    success: false,
                    message: "Email Existed!",
                    data: {}
                });
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(reg.password, salt, (err, hash) => {
                        if (err) throw err;
                        reg.password = hash;
                        reg.save().then(res => {
                            console.log(res);
                        });
                    });
                });
                res.json({
                    success: true,
                    message: "User Registered Successfully",
                    data: userInfo
                });
            }

        });
    // reg.save().then((res) => {
    //     console.log(res);
    // });
    //res.end();
});



module.exports = route;