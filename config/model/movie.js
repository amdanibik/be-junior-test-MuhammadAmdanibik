const Sequelize = require("sequelize");
const db = require("../database/database");

var movie = db.define(
  "movies",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    language: Sequelize.STRING,
    status: Sequelize.STRING,
    rating: Sequelize.INTEGER,
  },
  {
    frezeTableName: true,
    timestamps: false,
  }
);

// removeattribut digunakan untuk menghilangkan id di api tampilan
// movie.removeAttribute("id");
module.exports = movie;
