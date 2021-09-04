const Sequelize = require("sequelize");
const db = require("../database/database");
// const cast = require("./cast");
// const movie = require("./movie");

var movie_cast = db.define(
  "movie_casts",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    movie_id: Sequelize.INTEGER,
    cast_id: Sequelize.INTEGER,
  },
  {
    frezeTableName: true,
    timestamps: false,
  }
);

// movie_cast.hasOne(movie, { foreignKey: "id" });

// movie_cast.belongsTo(movie, { foreignKey: "movie_id" });

// cast.removeAttribute("id");
module.exports = movie_cast;
