'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addConstraint('MovieCasts',{
        fields: ['cast_id'],
        type: 'foreign key',
        name: 'FK_cast_id',
        references:{
          table: 'Casts',
          field: 'id'
        },
        onDelete: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.removeConstraint('MovieCasts','FK_cast_id',{})

  }
};
