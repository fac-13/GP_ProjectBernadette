const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const { sendEmail } = require('./sendEmail.js');

const localhost = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const app = express();

app.disable('x-powered-by');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Receive form data and send to GP as an email
app.post('/send', (req, res) => {
  sendEmail(req.body, null);
});

app.listen(port, () => {
  console.log(`My Wayfinder is running on http://${localhost}:${port}`);
});
