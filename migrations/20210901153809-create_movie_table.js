'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
          type: Sequelize.BIGINT(),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      name: Sequelize.STRING(100),
      language: Sequelize.STRING(30),
      status: Sequelize.STRING(10),
      rating: {
          type: Sequelize.INTEGER(1),
          validate: {
              min: 1,
              max: 5
          }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};
