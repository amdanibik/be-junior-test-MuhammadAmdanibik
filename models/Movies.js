import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Movies = db.define('movies', {
    name: {
        type: DataTypes.STRING
    }, 
    language: {
        type: DataTypes.STRING
    }, 
    status: {
        type: DataTypes.STRING
    }, 
    rating: {
        type: DataTypes.STRING
    },
});

export default Movies;