const mongoose = require('mongoose');
const { Schema } = mongoose;

const systemSettingsSchema = new Schema ({
    name: String,
    value: String
});

mongoose.model('systemSettings', systemSettingsSchema); 