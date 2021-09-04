const db = require("../database/models");
module.exports = {
  list: async (req, res) => {
    try {
      const casts = await db.casts.findAll({
        attributes: ["id", "name", "birthday", "deadday", "rating"],
        include: [
          {
            model: db.movies,
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json({ casts });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const cast = await db.casts.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: db.movies,
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json({ cast });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addCast: async (req, res) => {
    try {
      const { name, birthday, deadday, rating } = req.body;
      const cast = await db.casts.create({ name, birthday, deadday, rating });
      const result = await db.casts.findOne({ where: { id: cast.id } });
      res.status(200).json({ message: "Success add new cast", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCast: async (req, res) => {
    try {
      const cast = await db.casts.findOne({ where: { id: req.params.id } });
      cast.name = req.body.name;
      cast.birthday = req.body.birthday;
      cast.deadday = req.body.deadday;
      cast.rating = req.body.rating;
      await cast.save();

      const result = await db.casts.findOne({ where: { id: cast.id } });
      res.status(200).json({ message: "Success update cast", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCast: async (req, res) => {
    try {
      const cast = await db.casts.destroy({ where: { id: req.params.id } });
      if (cast) {
        res.status(200).json({ message: "Success deleted" });
      } else {
        res.status(404).json({ message: "id not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
