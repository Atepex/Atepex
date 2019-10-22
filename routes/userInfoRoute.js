const mongoose = require('mongoose');
const Invoice = mongoose.model("invoices");
const User = mongoose.model('users')

module.exports = app => {
    app.post('/api/user/info', (req, res) => {
       const {googleID,firstName,lastName,email,phone,zip} = req.body;
       const user = new User({
        googleID,firstName,lastName,email,phone,zip
       })
       user.save();
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
