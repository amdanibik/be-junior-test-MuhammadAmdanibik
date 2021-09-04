"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class moviecast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  moviecast.init(
    {
      movieId: DataTypes.INTEGER,
      castId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "moviecast",
      tableName: "movie_cast",
    }
  );
  return moviecast;
};
