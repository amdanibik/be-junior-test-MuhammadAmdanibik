const Sequelize = require('sequelize');

const sequelize = new Sequelize('moviedb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;