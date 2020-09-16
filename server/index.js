/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
require('dotenv').config();
const express = require('express');
const path = require('path');
// const proxy = require('http-proxy-middleware');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('App listening ...');
});
