const mongoose = require("mongoose");
const Invoice = mongoose.model("invoices");

module.exports = app => {
    app.get("/api/getinvoices", async (req, res) => {
        const invoices = await Invoice.find();
        if (invoices) {
          res.send(invoices);
          return;
        }
    
        res.status(404).send('Not Found');
      });
};
