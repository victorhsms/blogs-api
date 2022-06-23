const { BlogPost, User, Category } = require('../database/models');

const getAll = () => 
  BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const getById = async (id) => {
  const postFound = await BlogPost.findOne(
    { 
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  if (!postFound) {
    const error = { status: 404, message: 'Post does not exist' };
    throw error;
  }

  return postFound;
};

module.exports = {
  getAll,
  getById,
};