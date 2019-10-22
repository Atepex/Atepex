const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    _userID: String, 
    invoiceID: Number,
    invoiceDate: Date, 
    invoiceData: Buffer, 
    invoiceDesc: String,
    url: String
    
}); 

mongoose.model('invoices', invoiceSchema);