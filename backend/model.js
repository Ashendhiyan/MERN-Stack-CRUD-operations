const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    address: String,
    age: Number,
    phone: Number,
    email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;   