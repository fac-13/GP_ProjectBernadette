const nodemailer = require('nodemailer');
require('env2')('config.env');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ACCT_EMAIL,
    pass: process.env.ACCT_PASSWORD
  }
});
const sendEmail = msg => {
  const { user, responses } = msg;
  const contactInfo = `<strong>Name:</strong> ${user.name}<br> 
      <strong>Telephone:</strong> ${user.telephone}<br>
      <strong>Email:</strong>  ${user.email}<br>
      <strong>Location:</strong> ${user.location}<br>
      <strong>Best time:</strong> ${user.time}<br>
      <strong>Source:</strong> ${user.source}<br>
      <strong>GDPR</strong> ${user.gdpr}
      `;
  let responsesString = responses
    .map(res => `<strong>${res.question}:</strong> ${res.answer}`)
    .join('<br>');
  let mailOptions = {
    from: `${process.env.ACCT_EMAIL}`,
    to: `${process.env.EMAIL_TO}`,
    subject: `My Wayfinder - Request from ${user.name}`,
    html: `<p><strong>Client Contact Information: </strong><br>${contactInfo} <br><br><br> <strong>Client Responses:</strong><br> ${responsesString}</p>`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
