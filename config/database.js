import { Sequelize } from "sequelize";

const db = new Sequelize('movie', 'root', '1234Abcd', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;