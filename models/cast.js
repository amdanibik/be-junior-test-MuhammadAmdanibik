'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.MovieCast, {
      //   foreignKey: 'id',
      //   targetKey: 'cast_id'
      // })
      this.belongsToMany(models.Movie, {
        through: models.MovieCast,
        foreignKey: "cast_id",
        otherKey: "movie_id",
        as: "movies",
      });
    }
  };
  Cast.init({
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    deadday: DataTypes.DATE,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};