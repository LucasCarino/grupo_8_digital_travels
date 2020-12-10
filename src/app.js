var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookie = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); // para usar session y cookies
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const log = require('./middlewares/log') // middleware para mandar var locals del email a la vista

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paquetesRouter = require('./routes/paquetes');
var hotelesRouter = require('./routes/hoteles');
var excursionesRouter = require('./routes/excursiones');
var trasladosRouter = require('./routes/traslados');
var apiRouter = require('./routes/api/api')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({ // para usar session, secret identifica la pagina mia
  secret: 'Digital Travels',
  resave: true,
  saveUninitialized: true
}));
app.use(log); // middleware para mandar var locals del email a la vista

app.use(methodOverride('_method')) // para usar delete y put

app.use('/', indexRouter);
app.use('/paquetes', paquetesRouter);
app.use('/users', usersRouter);
app.use('/hoteles', hotelesRouter);
app.use('/excursiones', excursionesRouter);
app.use('/traslados', trasladosRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
