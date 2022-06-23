const userServices = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const allUsers = await userServices.getAllUsers();
  res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const userFound = await userServices.getById(id);
  res.status(200).json(userFound);
};

const newUser = async (req, res) => {
  const token = await userServices.newUser(req.body);
  res.status(201).json({ token });
};

module.exports = {
  getAllUsers,
  getById,
  newUser,
};