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
    }
  };
  MovieCast.init({
    movie_id: DataTypes.INTEGER,
    cast_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MovieCast',
    underscored: true,
    paranoid: true,
    tableName: "moviecasts",
    hooks: {
      afterCreate: (record) => {
        delete record.dataValues.createdAt;
        delete record.dataValues.updatedAt;
      },
    },
  });
  return MovieCast;
};