const sendGrid = require("sendgrid");
const helper = sendGrid.mail;
const keys = require("../config/keys");

class Mailer2 extends helper.Mail {
  constructor(content, recipient, subject) {
    super();
    this.state = {
      content,
      recipient,
      subject
    }
  }

  async send() {
    const {content, recipient, subject } = this.state;
    console.log('content ' + content);
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: recipient,
      from: "support@vaughns.com",
      subject: subject,
      html: content
    };
    sgMail.send(msg);
  }
}

module.exports = Mailer2;
