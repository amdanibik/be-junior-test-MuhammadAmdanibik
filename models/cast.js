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
      Cast.belongsToMany(models.Movie, { through: models.MovieCast , foreignKey: 'cast_id'})
    }
  };
  Cast.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    deadday: DataTypes.DATE,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};