const express = require('express');
const path = require('path');

const localhost = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const app = express();

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`My Wayfinder is running on http://${localhost}:${port}`);
});
