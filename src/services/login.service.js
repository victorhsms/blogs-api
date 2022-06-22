const { User } = require('../database/models');

const { generateJWTToken } = require('../utils/jwt');

const auth = async ({ email, password }) => {
  const userFound = await User.findOne({
    where: { email, password },
  });

  const error = { status: 400, message: 'Invalid fields' };

  if (!userFound) {
    throw error;
  }

  const token = generateJWTToken(userFound.dataValues);

  return token;
};

module.exports = {
  auth,
};