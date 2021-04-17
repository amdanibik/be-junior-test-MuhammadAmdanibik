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
      this.hasMany(models.MovieCast, { foreignKey: 'cast_id' })
    }
  };
  Cast.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    deadday: DataTypes.DATE,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};