const mongoose = require('mongoose');
const Invoice = mongoose.model("invoices");

module.exports = app => {
    app.post('/api/user/info', (req, res) => {
       const {fname,lname,email,phone,zip} = req.body;
       res.send(fname,lname,email,phone,zip);
    });

    app.post('/api/getinvoices', async (req, res) => {
        const {_id} = req.body;
        const invoices = await Invoice.find({_userID: _id});
        if (invoices) {
          res.send(invoices);
          return;
        }
    
        res.status(404).send('Not Found');
    });

    app.post("/api/deleteinvoice", async (req, res) => {
        const {_id} = req.body;
        Invoice.remove({_id: _id}, function(err) {
            if (!err) {
              return res.status(200);
            }
  
            return res.status(404);
          })
    })
};
