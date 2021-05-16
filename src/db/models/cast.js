"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cast.belongsToMany(models.Movie, { through: "MovieCast" });
    }
  }
  Cast.init(
    {
      name: DataTypes.STRING(100),
      birthday: DataTypes.DATE,
      deadday: DataTypes.DATE,
      rating: DataTypes.INTEGER,
      deletedAt: {
        field : "deleted_at",
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "Cast",
      underscored: true,
      paranoid: true,
      tableName: "casts",
      hooks: {
        afterCreate: (record) => {
          delete record.dataValues.createdAt;
          delete record.dataValues.updatedAt;
        },
        afterUpdate: (record) => {
          delete record.dataValues.deletedAt;
        },
      },
    }
  );
  return Cast;
};
