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
      Movie.belongsToMany(models.Cast, { through: models.MovieCast, foreignKey: 'movie_id'})
    }
  };
  Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Employee's name can't be empty !`
        },
        notEmpty: {
          msg: `Employee's name can't be empty !`
        }
      }
    },
    language: DataTypes.STRING,
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};