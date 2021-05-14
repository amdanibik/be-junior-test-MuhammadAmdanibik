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
     await queryInterface.bulkInsert('Casts', [
      {name: 'Ben Affleck', birthday: '1972-08-15', deadday: null, rating: 4, movieId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Henry Cavill', birthday: '1983-05-05', deadday: null, rating: 4, movieId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Gal Gadot', birthday: '1985-04-30', deadday: null, rating: 5, movieId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Ray Fisher', birthday: '1987-09-08', deadday: null, rating: 4, movieId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Jason Momoa', birthday: '1979-08-01', deadday: null, rating: 4, movieId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Robert Downey Jr.', birthday: '1965-04-04', deadday: null, rating: 5, movieId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Chris Evans', birthday: '1981-06-13', deadday: null, rating: 4, movieId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Mark Ruffalo', birthday: '1967-11-22', deadday: null, rating: 4, movieId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Chris Hemsworth', birthday: '1983-08-11', deadday: null, rating: 5, movieId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Scarlett Johansson', birthday: '1984-11-22', deadday: null, rating: 5, movieId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Brie Larson', birthday: '1989-10-01', deadday: null, rating: 4, movieId: 2, createdAt: new Date(), updatedAt: new Date()}
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
