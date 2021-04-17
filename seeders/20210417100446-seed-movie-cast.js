'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let movieCasts = require('../databases/movie-casts.json')
    movieCasts = movieCasts.map(data => { return { ...data, createdAt: new Date(), updatedAt: new Date() } })
    await queryInterface.bulkInsert('MovieCasts', movieCasts, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MovieCasts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
