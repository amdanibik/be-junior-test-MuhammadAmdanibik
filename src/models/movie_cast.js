'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie_Cast.init({
    movie_id: DataTypes.BIGINT,
    cast_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Movie_Cast',
    paranoid: true,
  });
  return Movie_Cast;
};