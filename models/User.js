const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleID: String,
    firstName: String,
    lastName: String,
    email: String,
    admin: { type: Boolean, default: false }
});

mongoose.model('users', userSchema); 