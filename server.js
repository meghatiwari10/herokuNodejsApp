var express = require('express');
var path    = require("path");
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app     = express();
var routes = require('./controllers');
var users = require('./controllers/users');
var pg = require('pg');

// const connectionString = process.env.DATABASE_URL || 
						// 'postgres://megha:megha@localhost:5432/testdb';


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));
app.use('/build', express.static('public'));

var createUser = require('./models/addUser');
var searchUser = require('./models/searchUser');
// var modifyUser = require('./models/modifyUser');
var displayAll = require('./models/displayAll');
// require('./index.js');
// app.get('/',function(req,res){
//   res.sendFile('./views/index.html', { root: __dirname });
//   //It will find and locate index.html from View or Scripts
// });


app.get('/', routes.index);
app.post('/users/addUser',function(req,res) {

	createUser.user(req,res);
});
app.get('/users/displayAll',function(req,res) {

	displayAll.display(req,res);
	//console.log(result);
	//res.send(result);

});

app.get('/users/searchUser',function(req,res) {

	searchUser.search(req,res);
	//console.log(result);
	//res.send(result);

});


// app.get('/modifyUser',function(req,res){
//   res.sendFile('/modifyUser.html');
// });

// app.get('/searchUser',function(req,res){
//   res.sendFile('/searchUser.html');
// });

// app.get('/displayAll',function(req,res){
//   res.sendFile('/displayAll.html');
// });

app.listen(3000);

console.log("Running at Port 3000");


// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// const appDb = require('./config');
// require('./app/routes');

// var index = require('./routes/index');
// var users = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// var port = process.env.PORT || 8080;
// app.listen(port);
// console.log('Server started running on ' + port); 


// // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   var err = new Error('Not Found');
// //   err.status = 404;
// //   next(err);
// // });

// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

//module.exports = app;
