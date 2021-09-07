import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Casts = db.define('casts', {
    name: {
        type: DataTypes.STRING
    }, 
    birthday: {
        type: DataTypes.STRING
    }, 
    deadday: {
        type: DataTypes.STRING
    }, 
    rating: {
        type: DataTypes.STRING
    }
});

export default Casts;