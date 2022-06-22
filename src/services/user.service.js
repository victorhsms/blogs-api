const { User } = require('../database/models');

const getAllUsers = () => 
  User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  getAllUsers,
};
