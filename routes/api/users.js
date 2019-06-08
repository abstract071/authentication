const passport = require('passport');
const usersRouter = require('express').Router();

const { token } = require('../../services');

usersRouter.post('/signup', token);

usersRouter.post('/signin', token);

usersRouter.get('/current', passport.authenticate('bearer', { session: false }), (req, res, next) => {
  // const { payload: { id } } = req;

  console.log(req);

  return res.status(200).json({ response: 'GET /current OK' });
});

module.exports = usersRouter;
