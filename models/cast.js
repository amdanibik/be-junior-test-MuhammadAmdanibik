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
      Cast.belongsTo(models.MovieCast, { foreignKey: 'cast_id'})
    }
  };
  Cast.init({
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
      },
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: `birthday can't be null !`
        },
        notEmpty: {
          msg: `birthday can't be empty !`
        },
        isDate: {
          msg: `only allow date for birthday`,
          args: true
        }
      }
    },
    deadday: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: {
          msg: `only allow date for deadday`,
          args: true
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
    modelName: 'Cast',
  });
  return Cast;
};