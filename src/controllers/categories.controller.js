const categoriesServices = require('../services/categories.service');

const getAll = async (req, res) => {
  const allCategories = await categoriesServices.getAll();
  res.status(200).json(allCategories);
};

module.exports = {
  getAll,
};