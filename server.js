var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session  =require('express-session');
var morgan = require('morgan');
var mangoose = require('mongoose');
var configDB = require('./config/database.js')

// Connect to server
mongoose.connect(configDB.url);

// morgan will be the middle ware b/w client and app server. Each request will be going through morgan
app.use(morgan('dev'));

app.use(cookieParser());
app.use(session({ secret: 'sanketString',
				  saveUninitialized: true,
				  resave: true}));

app.use('/', function(request, response) {
	console.log("New Request has been arrived!!!");
	response.send('Our first express program');
	console.log(request.cookies);
	console.log("=======================");
	console.log(request.session);
	console.log("=======================");
});

// require('./app/routes.js')(app);

app.listen(port);

console.log('Server running on port : ' + port);
