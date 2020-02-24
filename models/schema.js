const mongoose = require('mongoose');


var registerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

module.exports.regSchema = mongoose.model('user', registerSchema); // user -- schema name