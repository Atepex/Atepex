const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema({
    url: String,
    type: String,
    description: String
}); 

mongoose.model('image', imageSchema);
