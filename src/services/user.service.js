const { User } = require('../database/models');

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

module.exports = {
  getAllUsers,
  getById,
};
