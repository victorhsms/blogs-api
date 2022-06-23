const express = require('express');
const postController = require('../controllers/post.controller');
const { authToken } = require('../middleware/index');

const router = express.Router();

router.get('/', authToken, postController.getAll);

module.exports = router;