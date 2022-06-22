const userServices = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const allUsers = await userServices.getAllUsers();
  res.status(200).json(allUsers);
};

module.exports = {
  getAllUsers,
};