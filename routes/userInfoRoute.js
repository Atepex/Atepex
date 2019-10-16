const mongoose = require('mongoose');

module.exports = app => {
    app.post('/api/user/info', (req, res) => {
       const {fname,lname,email,phone,zip} = req.body;
       res.send(fname,lname,email,phone,zip);
    });
};
