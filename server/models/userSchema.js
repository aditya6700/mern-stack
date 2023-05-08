const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// this method will run everytime when a save method is called
// this method hashes user password only when it is modified
// after hasing it will call the next fuc which inturn calls the save method
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

const Users = mongoose.model('User', userSchema);
module.exports = Users;