import {
  createCast,
  deleteCast,
  findCastById,
  findCasts,
  updateCast,
} from "../services/cast";
import HttpException from "../utils/httpException";

export const getCastsHandler = async (req, res, next) => {
  try {
    const casts = await findCasts(req.query);

    if (!casts) {
      throw new HttpException(404, "Casts not found");
    }

    res.status(200).json(casts);
  } catch (err) {
    next(err);
  }
};

export const detailCastHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cast = await findCastById(id);

    if (!cast) {
      throw new HttpException(404, "Cast not found");
    }

    res.status(200).json(cast);
  } catch (err) {
    next(err);
  }
};

export const createCastHandler = async (req, res, next) => {
  try {
    const cast = await createCast(req.body);

    if (!cast) {
      throw new HttpException(500, "Something went wrong");
    }

    res.status(200).json(cast);
  } catch (err) {
    next(err);
  }
};

export const updateCastHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cast = await findCastById(id);

    if (!cast) {
      throw new HttpException(404, "Cast not found");
    }

    await updateCast(id, req.body);

    res.status(200).json({ message: "Cast updated" });
  } catch (err) {
    next(err);
  }
};

export const deleteCastHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cast = await findCastById(id);

    if (!cast) {
      throw new HttpException(404, "Cast not found");
    }

    const error = await deleteCast(id);

    if (error) {
      throw new HttpException(500, "Something went wrong");
    }

    res.status(200).json({ message: "Cast deleted" });
  } catch (err) {
    next(err);
  }
};
