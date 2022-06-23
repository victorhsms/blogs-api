const { BlogPost, User, Category } = require('../database/models');

const getAll = () => 
  BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const getById = async () => {
  const userFound = await BlogPost.findOne();

  if (!userFound) {
    const error = { status: 404, message: 'User does not exist' };
    throw error;
  }

  return userFound;
};

module.exports = {
  getAll,
  getById,
};