const nodemailer = require('nodemailer');
require('env2')('config.env');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ACCT_EMAIL,
    pass: process.env.ACCT_PASSWORD
  }
});

const sendEmail = (msgData, error) => {
  console.log('message:', msgData);
  let mailOptions = {
    from: `${process.env.ACCT_EMAIL}`,
    to: `${process.env.EMAIL_TO}`,
    subject: `My Wayfinder - Request from ${msgData.user.name}`, //user
    text: `${msgData.responses[0]}`,
    html: `<p>${msgData.responses[0].question}</p>
    <p>${msgData.responses[0].answer}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Failed to send message:', error);
    }
    console.log('message sent: %s', info.messageId);
  });
};

module.exports = { sendEmail };
