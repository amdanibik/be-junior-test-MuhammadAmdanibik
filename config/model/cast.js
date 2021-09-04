const Sequelize = require("sequelize");
const db = require("../database/database");

var cast = db.define(
  "casts",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    birthday: Sequelize.DATE,
    deadday: Sequelize.DATE,
    rating: Sequelize.INTEGER,
  },
  {
    frezeTableName: true,
    timestamps: false,
  }
);

// removeattribut digunakan untuk menghilangkan id di api tampilan
// cast.removeAttribute("id");
module.exports = cast;
