const categoriesServices = require('../services/categories.service');

const getAll = async (req, res) => {
  const allCategories = await categoriesServices.getAll();
  res.status(200).json(allCategories);
};

const newCategory = async (req, res) => {
  const addedCategory = await categoriesServices.newCategory(req.body);

  res.status(201).json(addedCategory);
};

module.exports = {
  getAll,
  newCategory,
};