'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('moviecasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      movie_id: {
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: "movies",
          }
        }
      },
      cast_id: {
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: "casts",
          }
        }
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('moviecasts');
  }
};