var createError = require('http-errors');
var express = require('express');

var instagramRouter = require('./routes/instagram');
var usersRouter = require('./routes/user');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/sm-instagram', instagramRouter);

module.exports = {
  app
}