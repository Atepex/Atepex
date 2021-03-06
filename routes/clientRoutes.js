const mongoose = require("mongoose");
const User = mongoose.model("users");
const Mailer2 = require('../services/Mailer2');

module.exports = app => {
    app.get("/api/getclients", async (req, res) => {
        const users = await User.find();
        if (users) {
          res.send(users);
          return;
        }
    
        res.status(404).send('Not Found');
      });

      
      app.post("/api/modifyclient", async(req, res) => {
        const { _id, fname, lname, phone, zip, email, admin, recNews } = req.body;
        User.findOne({_id: _id}, function(err, user) {
          if (!err) {
            user.firstName = fname;
            user.lastName = lname;
            user.email = email;
            user.phone = phone;
            user.zip = zip;
            user.admin = admin;
            user.recNews = recNews;
            user.save();
            return res.status(200);
          }
        })
        res.status(404);
      });

      app.post("/api/deleteclient", async(req, res) => {
        const { _id } = req.body
        User.remove({_id: _id}, function(err) {
          if (!err) {
            return res.status(200);
          }

          return res.status(404);
        })
      });

      app.get("/api/getnewsclients", async(req, res) => {
        const users = await User.find({recNews: true});
        if (users) {
          res.send(users);
          return;
        }
    
        res.status(404).send('Not Found');
      })

      app.post("/api/sendnewsletter", async(req, res) => {
        const { subject, body, recipients} = req.body;
        const recipient = recipients;
        console.log(recipient);
        const mailer = new Mailer2(body, recipient, subject);
        
        try {
            await mailer.sendMultiple();
            res.status(200);
        } catch (err) {
            console.log(err);
            res.status(422).send(err);
        }

      });
      

};
