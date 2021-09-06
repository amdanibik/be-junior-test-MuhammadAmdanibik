import { findAllId } from "../services/cast";
import {
  assignMovie,
  createMovie,
  deleteMovie,
  findMovieById,
  findMovies,
  updateMovie,
} from "../services/movie";
import HttpException from "../utils/httpException";

export const getMoviesHandler = async (req, res, next) => {
  try {
    const movies = await findMovies(req.query);

    if (!movies) {
      throw new HttpException(404, "Movies not found");
    }

    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};

export const detailMovieHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await findMovieById(id);

    if (!movie) {
      throw new HttpException(404, "Movie not found");
    }

    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

export const createMovieHandler = async (req, res, next) => {
  try {
    const movie = await createMovie(req.body);

    if (!movie) {
      throw new HttpException(500, "Something went wrong");
    }

    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

export const updateMovieHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await findMovieById(id);

    if (!movie) {
      throw new HttpException(404, "Movie not found");
    }

    await updateMovie(id, req.body);

    res.status(200).json({ message: "Movie updated" });
  } catch (err) {
    next(err);
  }
};

export const deleteMovieHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await findMovieById(id);

    if (!movie) {
      throw new HttpException(404, "Movie not found");
    }

    await deleteMovie(id);

    res.status(200).json({ message: "Movie deleted" });
  } catch (err) {
    next(err);
  }
};

export const assignMovieHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await findMovieById(id);

    if (!movie) {
      throw new HttpException(404, "Movie not found");
    }

    const castsId = await Promise.all(
      req.body.castsId.split(",").map((string) => string.trim())
    );

    const casts = await findAllId(castsId);

    const data = await Promise.all(
      casts.map((cast) => {
        return { cast_id: cast.id, movie_id: +id };
      })
    );

    const assigned = await assignMovie(data);

    res.status(200).json(assigned);
  } catch (err) {
    next(err);
  }
};
