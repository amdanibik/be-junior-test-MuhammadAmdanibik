const db = require("../db/models");
const baseResponse = require("../helper/baseResponse");

class CastController {
  static async list(req, res, next) {
    try {
      const result = await db.Movie.findAll({
        include: [
          {
            model: db.Cast,
            through: { attributes: [] },
          },
        ],
      });
      const payload = {
        success: true,
        message: "success get all movie",
        data: result,
      };
      return baseResponse(payload)(res);
    } catch (error) {
      next(error);
    }
  }

  static async insert(req, res, next) {
    try {
      const movie = await db.Movie.create(req.body, {
        include: db.Cast,
      });
      const castId = req.body.casts;
      if (castId) await movie.setCasts(castId);
      const result = await db.Movie.findOne({
        where: { id: movie.id },
        include: [
          {
            model: db.Cast,
            through: { attributes: [] },
          },
        ],
      });
      const payload = {
        success: true,
        message: "success create movie",
        data: result,
      };
      return baseResponse(payload)(res, 201);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CastController;
