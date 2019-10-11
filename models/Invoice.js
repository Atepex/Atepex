const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    _userID: String, 
    invoiceID: Number,
    invoiceDate:  { type: Date, default: Date.now() }, 
    invoiceData: {type: Object}, 
    invoiceDesc: String
    
}); 

mongoose.model('invoices', invoiceSchema);
