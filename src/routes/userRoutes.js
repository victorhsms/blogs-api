const express = require('express');
const userController = require('../controllers/user.controller');
const { authToken } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, userController.getAllUsers);

module.exports = router;