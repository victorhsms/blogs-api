const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const generateJWTToken = ({ id, email }) => jwt.sign({ id, email }, TOKEN_SECRET, jwtConfig);

module.exports = {
  generateJWTToken,
};
