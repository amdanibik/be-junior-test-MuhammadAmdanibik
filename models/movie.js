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
      // this.belongsTo(models.MovieCast, {
      //   foreignKey: 'id',
      //   targetKey: 'movie_id'
      // })
      this.belongsToMany(models.Cast, {
        through: models.MovieCast,
        foreignKey: "movie_id",
        otherKey: "cast_id",
        as: 'casts'
      });
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
  });
  return Movie;
};