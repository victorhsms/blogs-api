const error = require('./src/error');
const validateLogin = require('./src/validateLogin');
const authToken = require('./src/authToken');
const validateUser = require('./src/validateUser');
const validateCategory = require('./src/validateCategory');

module.exports = {
  error,
  validateLogin,
  authToken,
  validateUser,
  validateCategory,
};