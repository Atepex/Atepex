const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    _userID: String, 
    invoiceID: NumberInt,
    invoiceDate: Date, 
    invoiceData: binData, 
    invoiceDesc: String
    
}); 

mongoose.model('invoices', invoiceSchema);