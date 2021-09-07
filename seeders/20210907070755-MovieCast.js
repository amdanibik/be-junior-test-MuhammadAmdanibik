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
   await queryInterface.bulkInsert(
     "moviecasts",
     [
       {
         movie_id: 1,
         cast_id: 1,
       },
       {
         movie_id: 1,
         cast_id: 2,
       },
       {
         movie_id: 1,
         cast_id: 3,
       },
       {
         movie_id: 1,
         cast_id: 4,
       },
       {
         movie_id: 1,
         cast_id: 5,
       },
       {
         movie_id: 2,
         cast_id: 1,
       },
       {
         movie_id: 2,
         cast_id: 2,
       },
       {
         movie_id: 3,
         cast_id: 1,
       },
       {
         movie_id: 3,
         cast_id: 4,
       },
       {
         movie_id: 1,
         cast_id: 5,
       },
       {
         movie_id: 4,
         cast_id: 1,
       },
       {
         movie_id: 4,
         cast_id: 4,
       },
       {
         movie_id: 5,
         cast_id: 1,
       },
       {
         movie_id: 5,
         cast_id: 2,
       },
       {
         movie_id: 5,
         cast_id: 3,
       },
       {
         movie_id: 5,
         cast_id: 4,
       },
       {
         movie_id: 5,
         cast_id: 5,
       },
     ],
     {}
   );
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
