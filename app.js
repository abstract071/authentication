const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const errorHandler = require('errorhandler');

const { bearerStrategy } = require('./services/passport');
const router = require('./routes');

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
passport.use(bearerStrategy);
app.use(passport.initialize());
app.use(router);

if(!isProduction) {
  app.use(errorHandler());
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
