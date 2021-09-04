"use strict";
const movieCasts = [...Array(30)].map((e) => ({
  movieId: Math.round(Math.random() * 19 + 1),
  castId: Math.round(Math.random() * 7 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movie_cast", movieCasts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movie_cast");
  },
};
