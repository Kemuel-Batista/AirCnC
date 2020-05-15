const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: Number
})

module.exports = mongoose.model('User', UserSchema);