'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let casts = require('../databases/casts.json')
    casts = casts.map(data => { return { ...data, createdAt: new Date(), updatedAt: new Date() } })
    await queryInterface.bulkInsert('Casts', casts, {})
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
    await queryInterface.bulkDelete('Casts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
