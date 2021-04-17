'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let movies = require('../databases/movies.json')
    movies = movies.map(data => { return { ...data, createdAt: new Date(), updatedAt: new Date() } })
    await queryInterface.bulkInsert('Movies', movies, {})
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
    await queryInterface.bulkDelete('Movies', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
