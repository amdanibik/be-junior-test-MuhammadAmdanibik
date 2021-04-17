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
      this.hasMany(models.MovieCast, { foreignKey: 'movie_id' })
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    language: DataTypes.STRING,
    status: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};