const postServices = require('../services/post.service');

const getAll = async (_req, res) => {
  const allPosts = await postServices.getAll();
  res.status(200).json(allPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const userFound = await postServices.getById(id);
  res.status(200).json(userFound);
};

module.exports = {
  getAll,
  getById,
};