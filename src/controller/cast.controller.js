const baseResponse = require("../helper/baseResponse");
const db = require("./../db/models");

class CastController {
  static async list(req, res, next) {
    try {
      const result = await db.Cast.findAll({
        include: [
          {
            model: db.Movie,
            through: { attributes: [] },
          },
        ],
      });
      const payload = {
        success: true,
        message: "success get list of casts",
        data: result,
      };
      return baseResponse(payload)(res);
    } catch (error) {
      next(error);
    }
  }

  static async castById(req, res, next) {
    try {
      const result = await db.Cast.findByPk(req.params.id);
      const payload = {
        success: true,
        message: "success get cast",
        data: result,
      };
      return baseResponse(payload)(res);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const status = await db.Cast.destroy({ where : { id :req.params.id}});
      if(status) {
        res.status(204).end()
      } else {
        throw new Error("no field deleted !")
      }
    } catch (error) {
      next(error);
    }
  }

  static async restore(req, res, next) {
    try {
      const status = await db.Cast.restore({ where : { id :req.params.id}});
      if(status) {
        res.status(200).end()
      } else {
        throw new Error("no field restored !")
      }
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
      return baseResponse(payload)(res, 201);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const [_, data] = await db.Cast.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true,
      });
      if (data !== []) {
        const payload = {
          success: true,
          message: "success update cast",
          data: data[0],
        };
        return baseResponse(payload)(res);
      } else {
        throw new Error("no field updated !");
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CastController;
