import { Sequelize } from "sequelize";
import Casts from "../models/Casts.js";
import MovieCasts from "../models/MovieCasts.js";
import Movies from "../models/Movies.js";

export const getMovies = async (req, res) => {
    try {
        const movies = await Movies.findAll();
        res.send(movies);
    } catch (err) {
        console.log(err);
    }
}



export const getListCasts = async (req, res) => {
    Movies.hasMany(MovieCasts);
    MovieCasts.belongsTo(Casts);
    try {
        const getlist = await Movies.findAll({
            include: [{
                model: MovieCasts,
                attributes: ['id','castId'],
                separate: true,
                limit: 5,
                include: [{model: Casts, attributes: ['name','birthday','deadday']}]
            }],
            attributes: ['id','name','language','status','rating'],
        });
        res.send(getlist);
    } catch (err) {
        console.log(err);
    }
    /* Movies.belongsToMany(Casts, { through: MovieCasts});
    Casts.belongsToMany(Movies, { through: MovieCasts});
    try {
        const getlist = await Movies.findAll({
            include: [{
                model: Casts,
                attributes: ['name', 'birthday','deadday'],
                through: {
                    attributes: []
                },
                required: true,
            }],
            attributes: ['id','name','language','status','rating'],
        });
        res.send(getlist);
    } catch (err) {
        console.log(err);
    }
    */
}

export const getMovieById = async (req, res) => {
    try {
        const movies = await Movies.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(movies[0]);
    } catch (err) {
        console.log(err);
    }
}

export const createMovie = async (req, res) => {
    try {
        await Movies.create(req.body);
        res.json({
            "message": "Movie added"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateMovie = async (req, res) => {
    try {
        await Movies.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteMovie = async (req, res) => {
    try {
        await Movies.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}