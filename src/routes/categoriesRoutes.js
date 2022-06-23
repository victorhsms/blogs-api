const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const { authToken } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, categoriesController.getAll);

module.exports = router;