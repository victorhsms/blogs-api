const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    "PostCategory",
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'BlogPost',
          key: 'id',
        }
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Category',
          key: 'id'
        }
      }
    },
    {
      timestamps: false,
    }
  );

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost,{
      as: 'posts',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
