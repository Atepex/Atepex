const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    _userID: String, 
    invoiceID: Number,
    invoiceDate: Array, 
    invoiceData: String, 
    invoiceDesc: String
    
}); 

mongoose.model('invoices', invoiceSchema);