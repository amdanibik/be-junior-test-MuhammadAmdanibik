'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let apiKeys = require('../databases/api-keys.json')
    apiKeys = apiKeys.map(data => { return { ...data, createdAt: new Date(), updatedAt: new Date() } })
    await queryInterface.bulkInsert('Users', apiKeys, {})
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
    await queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
