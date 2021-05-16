const baseResponse = require("../helper/baseResponse");
const db = require("./../db/models");

class CastController {
  static async list(req, res, next) {
    try {
      const result = await db.Cast.findAll({
        include: [
          {
            model: db.Movie,
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
      const result = await db.Cast.create(req.body);
      const payload = {
        success: true,
        message: "success create cast",
        data: result,
      };
      return baseResponse(payload)(res);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const result = db.Cast.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning : true,
        plain: true
      }).then((res) => console.log("res",res))
      console.log("update", result)
      const payload = {
        success: true,
        message: "success update cast",
        data: result,
      };
      return baseResponse(payload)(res);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CastController;
