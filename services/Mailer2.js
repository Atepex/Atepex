const sendGrid = require("sendgrid");
const helper = sendGrid.mail;
const keys = require("../config/keys");

class Mailer2 extends helper.Mail {
  

  async send() {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: "emeryhaddy@gmail.com",
      from: "test@app.com",
      subject: "Testing 123",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>"
    };
    sgMail.send(msg);
  }
}

module.exports = Mailer2;
