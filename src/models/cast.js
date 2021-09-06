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
      Cast.belongsToMany(models.Movie, { through: 'Movie_Casts', foreignKey: 'cast_id' })
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
    paranoid: true,
  });
  return Cast;
};