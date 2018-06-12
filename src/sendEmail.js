const nodemailer = require('nodemailer');
require('env2')('config.env');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ACCT_EMAIL,
    pass: process.env.ACCT_PASSWORD
  }
});
const sendEmail = (subject, msg, error) => {
  console.log('message:', msg);
  let mailOptions = {
    from: `${process.env.ACCT_EMAIL}`,
    to: `${process.env.EMAIL_TO}`,
    subject: `My Wayfinder - Request from`, //user
    text: 'hello world',
    html: '<b>hello world</b>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Failed to send message');
    }
    console.log('message sent: %s', info.messageId);
  });
};

module.exports = { sendEmail };
