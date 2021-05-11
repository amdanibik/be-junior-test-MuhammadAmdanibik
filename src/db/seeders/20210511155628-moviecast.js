'use strict';
const moviecasts = [...Array(40)].map((e) => ({
  movie_id: Math.round(Math.random() * 29 + 1),
  cast_id: Math.round(Math.random() * 4 + 1),
  deleted_at: null,
  created_at: new Date(),
  updated_at: new Date(),
}));
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("moviecasts", moviecasts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("moviecasts");
  }
};
