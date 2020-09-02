var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
var logger = require('morgan');
const methodOverride = require('method-override');
require('dotenv').config();
require('./config/database');
require('./config/passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const comicsRouter = require('./routes/comics');
const writersRouter = require('./routes/writers');
const artistsRouter = require('./routes/artists');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'Sasuke',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// routes that need access to current user MUST GO BELOW
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comics', comicsRouter);
app.use('/', writersRouter);
app.use('/', artistsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
