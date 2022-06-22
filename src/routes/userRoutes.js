const express = require('express');
const userController = require('../controllers/user.controller');
const { authToken } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, userController.getAllUsers);
router.get('/:id', authToken, userController.getById);

module.exports = router;