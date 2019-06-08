const oauth2orize = require('oauth2orize');
const jwt = require('jsonwebtoken');

const config = require('../config');


const oauth2server = oauth2orize.createServer();

oauth2server.exchange(oauth2orize.exchange.clientCredentials((client, scope, body, done) => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  console.log(client);
  console.log(scope);
  console.log(body);

  // if(!user.email) {
  //   return res.status(422).json({
  //     errors: {
  //       email: 'is required',
  //     },
  //   });
  // }
  //
  // if(!user.password) {
  //   return res.status(422).json({
  //     errors: {
  //       password: 'is required',
  //     },
  //   });
  // }

  const token = jwt.sign({
    // email: this.email,
    // id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, config.JWT_SECRET);
  console.log(token);
  done(null, token);
}));


module.exports = {
  token: oauth2server.token()
};

