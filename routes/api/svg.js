const path = require('path');
const passport = require('passport');
const usersRouter = require('express').Router();

usersRouter.get('/:id'/*, passport.authenticate('bearer', { session: false })*/, (req, res, next) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  return res.status(200).sendFile(path.join(__dirname, '..', '..', 'public', 'js.svg'));
});

module.exports = usersRouter;
