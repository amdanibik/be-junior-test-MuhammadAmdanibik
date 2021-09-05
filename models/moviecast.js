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
    movie_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notNull: {
          msg: `movie_id can't be null !`
        },
        isInt: {
          msg: `movie_id must be integer`
        }
      }
    },
    cast_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: {
        name: `unique_cast_id`,
        msg: `movie already has this cast`
      },
      validate: {
        notNull: {
          msg: `cast_id can't be null !`
        },
        isInt: {
          msg: `cast_id must be integer`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MovieCast',
  });
  return MovieCast;
};