/**
 * paula app.js
 * 
 * @author	Marcel Thiesies <marcel.thiesies@me.com>
 * @version	0.0.1
 * @copyright	Marcel Thiesies
 */



/**
 * This creates a bunch of basic JavaScript variables and ties them 
 * to certain packages, dependencies, node functionality, and routes.
 */
var express		= require('express');
var path		= require('path');
var favicon		= require('serve-favicon');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');

// Mongo Setup
var mongo		= require('mongodb');
var monk		= require('monk');
var db			= monk('localhost:27017/paula');

var frontend 		= require('./routes/frontend');
var backend		= require('./routes/backend');

// instantiates Express and assigns our app variable.
var app = express();

// view Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// check for global env variable and set html output pretty 
if (app.get('env') === 'development') {
    app.locals.pretty = true;
};

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make our db accessible to our router
app.use(function(req, res, next) {
   req.db = db;
   next();
});

app.use('/', frontend);
app.use('/backend', backend);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err); 
});

/**
 * error handlers
 */

// development error handler, will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	    message : err.message,
	    error : err
	});
    });
}

// production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
	message : err.message,
	error : {}
    });
});

module.exports = app;
