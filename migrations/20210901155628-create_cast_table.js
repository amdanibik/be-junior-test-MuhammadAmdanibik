'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('casts', {
      id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      name: Sequelize.STRING(100),
      birthday: Sequelize.DATE,
      deadday: Sequelize.DATE,
      rating: {
          type: Sequelize.INTEGER(1),
          validate: {
              min: 1,
              max: 5
          }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

  });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('casts');
  }
};
