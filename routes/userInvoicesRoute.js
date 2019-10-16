const mongoose = require('mongoose');

module.exports = app => {
    app.get('/api/user_invoice', (req, res) => {
      const fakeInvoices = [
        {id: 1,
        fname: 'John',
        lname: 'Doe',
        work_done: 'AC repair'
      },
      {id: 1,
        fname: 'bob',
        lname: 'barker',
        work_done: 'AC repair, accidentally broke his t.v.'
      }
    ]
    res.send(fakeInvoices) 
    });
};
