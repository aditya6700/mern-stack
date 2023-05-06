const mongoose = require('mongoose');

mongoose.pluralize(null);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true,
        trim: true
    },
    work: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    cpassword: {
        type: String,
        require: true,
        unique: true
    }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;