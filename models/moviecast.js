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
      this.belongsTo(models.Movie, { foreignKey: 'movie_id' })
      this.belongsTo(models.Cast, { foreignKey: 'cast_id' })
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