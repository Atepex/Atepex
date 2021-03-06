const mongoose = require("mongoose");
const Invoice = mongoose.model("invoices");
const User = mongoose.model('users');

module.exports = app => {
    app.post('/api/user/info', (req, res) => {
       const {_id,firstName,lastName,email,phone,zip,recNews} = req.body;
       const user = new User({
        _id,firstName,lastName,email,phone,zip,recNews
       })
       user.save();
      });
      
      app.post('/api/user/info/modify',(req,res) =>{
        const {_id,firstName,lastName,email,phone,zip,recNews} = req.body;
        User.findOne({
          _id: _id
        },function(err,user){
          user.firstName = firstName,
          user.lastName = lastName,
          user.email = email,
          user.phone = phone,
          user.zip = zip,
          user.recNews = recNews
          user.save()
        })
      })

  app.post("/api/user/invoice", (req, res) => {
    const { fname, lname, email, phone, zip } = req.body;
    res.send(fname, lname, email, phone, zip);
  });

  app.post("/api/getinvoices", async (req, res) => {
    const { _id } = req.body;
    const invoices = await Invoice.find({ _userID: _id });
    if (invoices) {
      res.send(invoices);
      return;
    }

    res.status(404).send("Not Found");
  });

  app.post("/api/deleteinvoice", async (req, res) => {
    const { _id } = req.body;
    Invoice.deleteOne({ _id: _id }, function(err) {
      if (!err) {
        return res.status(200);
      }

      return res.status(404);
    });
  });

  app.post("/api/modifyinvoice", async (req, res) => {
    const { _id, invoiceDesc } = req.body;
    Invoice.findOne({ _id: _id }, function(err, inv) {
      if (!err) {
        inv.invoiceDesc = invoiceDesc;
        inv.save();
        return res.status(200).send("successful");
      }
    }).catch(err => {
      return res.status(err);
    });
    res.status(404);
  });

  app.post("/api/addinvoice", async (req, res) => {
    const { invoiceID, invoiceDate, arrayBuffer, userID,url } = req.body;
    await new Invoice({
      invoiceID,
      invoiceDate,
      url,
      _userID: userID,
      invoiceData: arrayBuffer.toString('base64')
    }).save();

    return res.status(200).send("successful");
  });
};
