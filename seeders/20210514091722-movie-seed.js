'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Movies', [
      {name: 'Zack Synder\'s Justice League', language: 'English', status: 'ended', rating: 4, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Avengers\: Endgame', language: 'English', status: 'ended', rating: 5, createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
