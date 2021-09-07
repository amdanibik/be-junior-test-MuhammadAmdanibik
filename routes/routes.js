import express from "express";
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie, getListCasts } from "../controllers/Movies.js";
import { getCasts, getCastById, createCast, updateCast, deleteCast } from "../controllers/Casts.js";
import { getMovieCasts, getMovieCastById, createMovieCast, updateMovieCast, deleteMovieCast} from "../controllers/MovieCasts.js";

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

router.get('/casts', getCasts);
router.get('/casts/:id', getCastById);
router.post('/casts', createCast);
router.put('/casts/:id', updateCast);
router.delete('/casts/:id', deleteCast);

router.get('/moviecasts', getMovieCasts);
router.get('/moviecasts/:id', getMovieCastById);
router.post('/moviecasts', createMovieCast);
router.put('/moviecasts/:id', updateMovieCast);
router.delete('/moviecasts/:id', deleteMovieCast);

router.get('/getlistmoviecasts', getListCasts);

export default router;