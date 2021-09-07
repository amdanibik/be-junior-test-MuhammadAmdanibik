'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Movie, {
        foreignKey: 'id',
        sourceKey: 'movie_id'
      })
      this.hasMany(models.Cast, {
        foreignKey: 'id',
        sourceKey: 'cast_id'
      })
    }
  };
  MovieCast.init({
    movie_id: DataTypes.INTEGER,
    cast_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieCast',
  });
  return MovieCast;
};