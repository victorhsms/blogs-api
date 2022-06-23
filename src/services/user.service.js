const { User } = require('../database/models');

const { generateJWTToken } = require('../utils/jwt');

const getAllUsers = () => 
  User.findAll({ attributes: { exclude: ['password'] } });

const getById = async (id) => {
  const userFound = await User.findOne({ 
    where: { id }, attributes: { exclude: ['password'] },
  });

  if (!userFound) {
    const error = { status: 404, message: 'User does not exist' };
    throw error;
  }

  return userFound;
};

const newUser = async (data) => {
  const { email } = data;
  const repeatedUser = await User.findOne({ where: { email } });

  if (repeatedUser) {
    const error = { status: 409, message: 'User already registered' };
    throw error;
  }

  const registeredUser = await User.create(data);
  return generateJWTToken(registeredUser);
};

module.exports = {
  getAllUsers,
  getById,
  newUser,
};
