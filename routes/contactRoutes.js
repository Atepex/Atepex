const mongoose = require('mongoose');
const Contact = mongoose.model('contact');
const contactUsTemplate = require('../services/emailTemplates/contactUsTemplate');
const Mailer2 = require('../services/Mailer2');

module.exports = app => {
    app.post('/api/contact', async (req, res) => {
        const { fname, lname, email, phone, comments } = req.body;
    
        const contact = new Contact({
            fname,
            lname,
            email,
            phone,
            comments,
            dateSent: Date.now()
        });
        
        const recipient = 'emeryhaddy@gmail.com';
        const mailer = new Mailer2(contactUsTemplate(contact));
        
        try {
            await mailer.send();
            res.status(200);
        } catch (err) {
            console.log(err);
            res.status(422).send(err);
        }

    
    
    });

  
};
