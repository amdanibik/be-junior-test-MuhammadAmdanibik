'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addConstraint('MovieCasts',{
      fields: ['cast_id'],
      type: 'unique',
      name: 'unique_cast_id'
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeConstraint('MovieCasts','unique_cast_id',{})

  }
};
