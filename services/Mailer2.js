const sendGrid = require("sendgrid");
const helper = sendGrid.mail;
const keys = require("../config/keys");

class Mailer2 extends helper.Mail {
  constructor(content) {
    super();
    this.state = {
      content
    }
  }

  async send() {
    const {content } = this.state;
    console.log('content ' + content);
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: "emeryhaddy@gmail.com",
      from: "support@vaughns.com",
      subject: 'Contact Us',
      html: content
    };
    sgMail.send(msg);
  }
}

module.exports = Mailer2;
