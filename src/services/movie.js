import { Movie, Cast, Movie_Cast, sequelize } from "../models";

export const findMovies = (query) => {
  return Movie.findAll({
    where: query,
    attributes: ["id", "name", "language", "status", "rating"],
    include: [
      {
        model: Cast,
        through: { attributes: [] },
        attributes: ["name", "rating", "birthday", "deadday"],
      },
    ],
  });
};

export const findMovieById = (id) => {
  return Movie.findByPk(id, {
    attributes: ["id", "name", "language", "status", "rating"],
    include: [
      {
        model: Cast,
        through: { attributes: [] },
        attributes: ["name", "rating", "birthday", "deadday"],
      },
    ],
  });
};

export const createMovie = (data) => {
  return Movie.create(data);
};

export const updateMovie = (id, data) => {
  return Movie.update(data, { where: { id } });
};

export const deleteMovie = (id) => {
  return sequelize
    .transaction((t) => {
      return Movie.destroy({ where: { id } }, { transaction: t }).then(() => {
        return Movie_Cast.destroy(
          { where: { movie_id: id } },
          { transaction: t }
        );
      });
    })
    .then(() => {})
    .catch((err) => {
      return err;
    });
};

export const assignMovie = (data) => {
  return Movie_Cast.bulkCreate(data);
};
