import Casts from "../models/Casts.js";
import MovieCasts from "../models/MovieCasts.js";
import Movies from "../models/Movies.js";

export const getMovieCasts = async (req, res) => {
    try {
        const moviecasts = await MovieCasts.findAll();
        res.send(moviecasts);
    } catch (err) {
        console.log(err);
    }
}

export const getMovieCastById = async (req, res) => {
    try {
        const moviecasts = await MovieCasts.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(moviecasts[0]);
    } catch (err) {
        console.log(err);
    }
}

export const createMovieCast = async (req, res) => {
    try {
        await MovieCasts.create(req.body);
        res.json({
            "message": "Movie Cast Added"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateMovieCast = async (req, res) => {
    try {
        await MovieCasts.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie Cast Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteMovieCast = async (req, res) => {
    try {
        await MovieCasts.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie Cast Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}