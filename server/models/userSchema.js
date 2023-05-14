const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    tokens: [{
        token: String
    }]
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
});


// generating jsonwebtokens
// creating a method in schema so that it is called from routes to create token on login
userSchema.methods.generateJsontoken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        // console.log(token);

        // this.tokens = this.tokens.concat({token:token})
        this.tokens = this.tokens.concat({ token });
        await this.save(); // saving the token into the database
        return token;
    } 
    catch (err) {
        console.log('error in creating or saving the token : ',err);
    }
}

const Users = mongoose.model('User', userSchema);
module.exports = Users;