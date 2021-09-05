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
      
      Movie.belongsToMany( models.Cast , { through: models.MovieCast, foreignKey: 'movie_id' , as:'casts'})
    }
  };
  Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `movie's name can't be null !`
        },
        notEmpty: {
          msg: `movie's name can't be empty !`
        },
        len: {
          args: [1,100],
          msg: `movie's name too short or too long`
        }
      }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `language can't be null !`
        },
        notEmpty: {
          msg: `language can't be empty !`
        },
        len: {
          args: [1,30],
          msg: `language too short or too long`
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `status can't be null !`
        },
        notEmpty: {
          msg: `status can't be empty !`
        },
        len: {
          args: [1,10],
          msg: `status too short or too long`
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: `rating can only be valid integer`
        },
        min: {
          args: 1,
          msg: 'min rating is 1'
        },
        max:{
          args: 5,
          msg: 'max rating is 5'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};