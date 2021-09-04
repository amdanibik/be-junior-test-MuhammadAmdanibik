"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class casts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      casts.belongsToMany(models.movies, { through: "moviecast" });
    }
  }
  casts.init(
    {
      name: DataTypes.STRING(100),
      birthday: DataTypes.DATE,
      deadday: DataTypes.DATE,
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: "casts",
      tableName: "casts",
    }
  );
  return casts;
};
