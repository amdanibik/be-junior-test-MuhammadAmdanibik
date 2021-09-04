"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movies.belongsToMany(models.casts, { through: "moviecast" });
    }
  }
  movies.init(
    {
      name: DataTypes.STRING(100),
      language: DataTypes.STRING(30),
      status: DataTypes.STRING(10),
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: "movies",
      tableName: "movies",
    }
  );
  return movies;
};
