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

  static async update(req, res, next) {
    try {
      const movie = await db.Movie.findOne({
        where: {
          id: req.params.id,
        },
      });
      movie.name = req.body.name;
      movie.language = req.body.language;
      movie.rating = req.body.rating;
      movie.status = req.body.status;
      await movie.save();
      if (movie) {
        const castId = req.body.casts;
        if (castId) {
          await db.MovieCast.destroy({ where: { id: movie.id } });
          await movie.setCasts(castId);
        }
        const result = await db.Movie.findOne({
          where: {
            id: movie.id,
          },
          include: [
            {
              model: db.Cast,
              through: { attributes: [] },
            },
          ],
        });
        const payload = {
          success: true,
          message: "success update movie",
          data: result,
        };
        return baseResponse(payload)(res);
      } else {
        throw new Error("no field updated !");
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const status = await db.Movie.destroy({ where: { id: req.params.id } });
      console.log(status);
      if (status) {
        res.status(204).end();
      } else {
        throw new Error("no field deleted !");
      }
    } catch (error) {
      next(error);
    }
  }

  static async restore(req, res, next) {
    try {
      const status = await db.Movie.restore({ where: { id: req.params.id } });
      if (status) {
        return res.status(200).end();
      } else {
        throw new Error("no field restored !");
      }
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const result = await db.Movie.findOne({
        where: {
          id: movie.id,
        },
        include: [
          {
            model: db.Cast,
            through: { attributes: [] },
          },
        ],
      });
      if (result) {
        const payload = {
          success: true,
          message: "success get movie",
          data: result,
        };
        return baseResponse(payload)(res);
      } else {
        throw new Error("no field selected !");
      }
    } catch (error) {
      res.status(404)
      next(error);
    }
  }
}

module.exports = CastController;
