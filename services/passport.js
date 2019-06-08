const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer');

const config = require('../config');


module.exports.bearerStrategy = new BearerStrategy((token, done) => {
  // User.findOne({ token: token }, function (err, user) {
  //   if (err) { return done(err); }
  //   if (!user) { return done(null, false); }
  //   return done(null, user, { scope: 'all' });
  // });
  try {
    jwt.verify(token, config.JWT_SECRET);
  } catch(error) {
    // console.error(error);
    console.error('something went wrong');
    return done(error);
  }

  return done(null, { token }/*, { scope: 'all' }*/);
});
