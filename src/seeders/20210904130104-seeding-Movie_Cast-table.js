"use strict";

const movieCasts = [...Array(30)].map((el) => ({
  movie_id: Math.round(Math.random() * 9 + 1),
  cast_id: Math.round(Math.random() * 9 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Movie_Casts", movieCasts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movie_Casts");
  },
};
