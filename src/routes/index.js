const express = require('express');

const router = express.Router();

const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;