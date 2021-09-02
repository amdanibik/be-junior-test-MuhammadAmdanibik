'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies_casts', {
      id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
      },
      movie_id: Sequelize.BIGINT,
      cast_id: Sequelize.BIGINT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies_casts')
  }
};
