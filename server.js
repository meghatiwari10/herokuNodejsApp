var express = require('express');
var path    = require("path");
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app     = express();
var routes = require('./controllers');
var createUser = require('./models/addUser');
var searchUser = require('./models/searchUser');
var displayAll = require('./models/displayAll');
var pg = require('pg');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));
app.use('/build', express.static('public'));


app.get('/', routes.index);

app.post('/users/addUser',function(req,res) {
	createUser.user(req,res);
});

app.get('/users/displayAll',function(req,res) {
	displayAll.display(req,res);
});

app.post('/users/searchUser',function(req,res) {
	searchUser.search(req,res);
});

app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");
