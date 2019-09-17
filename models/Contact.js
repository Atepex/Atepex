const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema ({
    fname: String,
    lname: String,
    phone: String,
    email: String,
    dateSent: Date
});

mongoose.model('contact', contactSchema); 