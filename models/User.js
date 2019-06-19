const mongoose = require('mongoose');
//these are equivalent
//const Schema = mongoose.Schema;
// const {Schema} = mongoose;
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleID: String
});

mongoose.model('users', userSchema); 