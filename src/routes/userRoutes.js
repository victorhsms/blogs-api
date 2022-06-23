const express = require('express');
const userController = require('../controllers/user.controller');
const { authToken, validateUser } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, userController.getAllUsers);
router.get('/:id', authToken, userController.getById);
router.post('/', validateUser, userController.newUser);

module.exports = router;