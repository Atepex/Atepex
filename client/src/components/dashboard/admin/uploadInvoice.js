const uploadInvoice = require("uploadInvoice");

const mongoose = require("mongoose");

const Invoice = mongoose.model("invoices");



  uploadInvoice.use(

    async (accessToken, refreshToken, profile, done) => {
        //profile.name.familyname
        //profile.name.givenname
        //profile.emails[0].value
        const existingInvoice = await Invoice.findOne({ invioceID: profile.invoiceID });
        if (existingInvoice) {
          //we already have a record with the given profile ID
          return done(null, existingInvoice);
        }
    const invoice = new Invoice({
        _userID: '5d964c05c3d53c8374e25f6e',
        invoiceID: 652,
        invoiceDate: Date(),
        invoiceData: 'invoice_652.pdf',
        invoiceDesc: "Sample Invoice Test"
      }).save();
      done(null, invoice);
    }
  );
  





// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var sampleInvoice = {_userID: this.state.userID, invoiceID: 652, invoiceDate: Date(), invoiceData: C:\Users\alecv\Downloads\invoice_652.pdf, invoiceDesc: "Sample Invoice Test"};
//   dbo.collection("invoice").insertOne(sampleInvoice, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });