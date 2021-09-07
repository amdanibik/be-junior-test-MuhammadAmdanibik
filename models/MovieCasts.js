import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Casts from "./Casts.js";
import Movies from "./Movies.js";

const { DataTypes } = Sequelize;

const MovieCasts = db.define('movie_casts', {
    movieId: {
        type: DataTypes.INTEGER,
        references: {
            model: Movies,
            key: 'id'
        }
    }, 
    castId: {
        type: DataTypes.INTEGER,
        references: {
            model: Casts,
            key: 'id'
        }
    }
});

export default MovieCasts;