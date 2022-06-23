const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const { authToken, validateCategory } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, categoriesController.getAll);

router.post(
  '/',
  authToken,
  validateCategory,
  categoriesController.newCategory,
);

module.exports = router;