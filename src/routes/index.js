const express = require('express');

const router = express.Router();

const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const postRoutes = require('./postRoutes');

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/post', postRoutes);

module.exports = router;