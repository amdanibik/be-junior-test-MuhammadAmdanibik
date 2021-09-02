const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Cast', {
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
    }
});