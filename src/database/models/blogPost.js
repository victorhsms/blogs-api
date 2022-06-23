const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define(
    "BlogPost",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      // referência: https://sebhastian.com/sequelize-timestamps/#:~:text=The%20timestamps%20option%20in%20Sequelize,const%20User%20%3D%20sequelize.
      timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
    }
  );

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  }

  return BlogPostTable;
};

module.exports = BlogPostSchema;