const { token } = require('./oauth2orize');
const { bearerStrategy } = require('./passport');

module.exports = {
  token,
  bearerStrategy
};
