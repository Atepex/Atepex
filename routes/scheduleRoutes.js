const mongoose = require('mongoose');
const Schedule = mongoose.model('schedule');
const scheduleTemplate = require('../services/emailTemplates/scheduleTemplate');
const Mailer2 = require('../services/Mailer2');

module.exports = app => {
    app.post('/api/schedulenow', async (req, res) => {
        const { fname, lname, street, stateAbbrv, zip, service, time, comments, subject, sendTo, phone, email } = req.body;
    
        const schedule = new Schedule({
            fname,
            lname,
            street,
            stateAbbrv,
            zip,
            service,
            time,
            comments,
            subject,
            phone, 
            email
        });
        
        const recipient = sendTo;
        const mailer = new Mailer2(scheduleTemplate(schedule), recipient, subject);
        
        try {
            await mailer.send(); 
            res.status(200);
        } catch (err) {
            console.log(err);
            res.status(422).send(err);
        }

    
    
    });

  
};
