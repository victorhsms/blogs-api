const express = require('express');
const loginController = require('../controllers/login.controller');
const { validateLogin } = require('../middleware/index');

const router = express.Router();

router.get('/', validateLogin, loginController.auth);

module.exports = router;