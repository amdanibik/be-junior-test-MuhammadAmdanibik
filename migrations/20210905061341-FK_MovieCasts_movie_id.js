'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.addConstraint('MovieCasts',{
        fields: ['movie_id'],
        type: 'foreign key',
        name: 'FK_movie_id',
        references:{
          table: 'Movies',
          field: 'id'
        },
        onDelete: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.removeConstraint('MovieCasts','FK_movie_id',{})
     
  }
};
