const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define(
    "Category",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return CategoryTable;
};

module.exports = CategorySchema;