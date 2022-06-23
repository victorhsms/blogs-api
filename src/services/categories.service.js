const { Category } = require('../database/models');

const getAll = () => Category.findAll();

const newCategory = (data) => Category.create(data);

module.exports = {
  getAll,
  newCategory,
};