const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema ({
    fname: String,
    lname: String,
    street: String,
    city: String,
    stateAbbrv: String,
    zip: String,
    service: String,
    time: String,
    comments: String
});

mongoose.model('schedule', scheduleSchema); 