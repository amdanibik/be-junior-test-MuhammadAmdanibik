import { Cast, Movie, Movie_Cast, sequelize } from "../models";

export const findCasts = (query) => {
  return Cast.findAll({
    where: query,
    attributes: ["id", "name", "rating", "birthday", "deadday"],
    include: [
      {
        model: Movie,
        through: { attributes: [] },
        attributes: ["name", "language", "status", "rating"],
      },
    ],
  });
};

export const findCastById = (id) => {
  return Cast.findByPk(id, {
    attributes: ["id", "name", "rating", "birthday", "deadday"],
    include: [
      {
        model: Movie,
        through: { attributes: [] },
        attributes: ["name", "language", "status", "rating"],
      },
    ],
  });
};

export const createCast = (data) => {
  return Cast.create(data);
};

export const updateCast = (id, data) => {
  return Cast.update(data, { where: { id } });
};

export const deleteCast = (id) => {
  return sequelize
    .transaction((t) => {
      return Cast.destroy({ where: { id } }, { transaction: t }).then(() => {
        return Movie_Cast.destroy(
          { where: { cast_id: id } },
          { transaction: t }
        );
      });
    })
    .then(() => {})
    .catch((err) => {
      return err;
    });
};

export const findAllId = (id) => {
  return Cast.findAll({ where: { id } });
};
