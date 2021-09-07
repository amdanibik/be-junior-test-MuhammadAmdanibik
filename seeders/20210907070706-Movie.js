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
     "movies",
     [
       {
         name: "satu",
         language: "indonesia",
         status: "on going",
         rating: 1,
       },
       {
         name: "dua",
         language: "english",
         status: "published",
         rating: 2,
       },
       {
         name: "tiga",
         language: "indonesia",
         status: "on going",
         rating: 3,
       },
       {
         name: "empat",
         language: "english",
         status: "published",
         rating: 4,
       },
       {
         name: "lima",
         language: "indonesia",
         status: "on going",
         rating: 5,
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
