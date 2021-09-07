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
     "casts",
     [
       {
         name: "cast satu",
         birthdate: new Date("1996-07-15"),
         deadday: new Date("2000-04-04"),
         rating: 1,
       },
       {
         name: "cast dua",
         birthdate: new Date("1993-07-15"),
         deadday: new Date("2001-04-04"),
         rating: 2,
       },
       {
         name: "cast tiga",
         birthdate: new Date("1956-07-15"),
         deadday: new Date("2420-04-04"),
         rating: 3,
       },
       {
         name: "cast empat",
         birthdate: new Date("1696-07-15"),
         deadday: new Date("2030-04-04"),
         rating: 4,
       },
       {
         name: "cast lima",
         birthdate: new Date("1096-07-15"),
         deadday: new Date("2000-04-04"),
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
