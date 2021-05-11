'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    name: DataTypes.STRING(100),
    language: DataTypes.STRING(30),
    status: DataTypes.STRING(10),
    rating: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Movie',
    underscored: true,
    paranoid: true,
    tableName : "movies"
  });
  return Movie;
};