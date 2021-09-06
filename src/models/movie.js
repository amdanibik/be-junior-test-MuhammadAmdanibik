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
      Movie.belongsToMany(models.Cast, { through: 'Movie_Casts', foreignKey: "movie_id" })
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    language: DataTypes.STRING,
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
    paranoid: true
  });
  return Movie;
};