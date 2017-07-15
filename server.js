var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var morgan = require('morgan');
var mangoose = require('mongoose');
var configDB = require('./config/database.js')

// morgan will be the middle ware b/w client and app server. Each request will be going through morgan
app.use(morgan('dev'));

app.use('/', function(request, response) {
	response.send('Or first express progrma');
});

app.listen(port);

console.log('Server running on port : ' + port);
