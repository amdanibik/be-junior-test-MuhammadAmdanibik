const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Movie', {
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
})