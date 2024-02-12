const jwt = require('jsonwebtoken');
const jwtConfig = require('../configs/jwt.config');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, jwtConfig.secret);
};

module.exports = {
  generateToken,
  verifyToken
};