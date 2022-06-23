const { Category } = require('../database/models');

const getAll = () => Category.findAll();

module.exports = {
  getAll,
};