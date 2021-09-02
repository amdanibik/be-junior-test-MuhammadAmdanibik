const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const movieCast = sequelize.define('Movies_Casts', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    movie_id: Sequelize.BIGINT,
    cast_id: Sequelize.BIGINT,
})

module.exports = movieCast;