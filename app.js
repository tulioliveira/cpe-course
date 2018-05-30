/**
 * Enviroment Variables Setup
 */
require('dotenv').config();

/**
 * Dependencies
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const methodOverride = require('method-override');
const sassMiddleware = require('node-sass-middleware');
const firebase = require('firebase');
require('firebase/firestore');

/**
 * Firebase Setup
 */
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

/**
 * Routes
 */
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const productsRouter = require('./routes/products');

/**
 * Application Initialization
 */
const app = express();

/**
 * View Engine Setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/**
 *  Application Configuration
 */
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'some-private-cpe-key',
  resave: false,
  saveUninitialized: false
}));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Setup
 */
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/products', productsRouter);

/**
 * Error Handling
 */
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
