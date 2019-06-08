const bcrypt = require('bcrypt');


const SALT_ROUNDS = 10;

const setPassword = async (password) => {
  try {
    return await bcrypt.hash(password, SALT_ROUNDS);
  } catch(error) {
    console.error(`setPassword: ${error}`);
  }
};

const validatePassword = async (password) => {
  try {
    return await bcrypt.compare( password, this.password );
  } catch(error) {
    console.error(`validatePassword: ${error}`);
  }
};

module.exports = {
  setPassword,
  validatePassword
};
