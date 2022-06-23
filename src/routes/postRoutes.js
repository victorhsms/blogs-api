const express = require('express');
const postController = require('../controllers/post.controller');
const { authToken } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, postController.getAll);
router.get('/:id', authToken, postController.getById);

module.exports = router;