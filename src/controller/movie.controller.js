const db = require("./../db/models");

class CastController {
  static async list(req, res, next) {
    try {
      const result = await db.Movie.findAll({
        include: [
          {
            model: db.Cast,
            attributes: { exclude: ["created_at"] },
            through: { attributes: [] },
          },
        ],
      });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async insert(req, res, next) {
    try {
      const result = await db.Movie.create(req.body);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CastController;
