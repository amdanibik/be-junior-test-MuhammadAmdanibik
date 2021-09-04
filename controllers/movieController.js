const db = require("../database/models");
module.exports = {
  list: async (req, res) => {
    try {
      const movies = await db.movies.findAll({
        attributes: ["id", "name", "status", "rating"],
        include: [
          {
            model: db.casts,
            through: { attributes: [] },
            attributes: ["name", "birthday", "deadday"],
          },
        ],
      });
      res.status(200).json({ movies });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const movie = await db.movies.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: db.casts,
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json({ movie });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addMovie: async (req, res) => {
    try {
      const { name, language, status, rating } = req.body;
      const movie = await db.movies.create({ name, language, status, rating });
      const result = await db.movies.findOne({ where: { id: movie.id } });
      res.status(200).json({ message: "Success add new movie", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateMovie: async (req, res) => {
    try {
      const id = req.params.id;
      const movie = await db.movies.findOne({ where: { id: id } });
      movie.name = req.body.name;
      movie.language = req.body.language;
      movie.rating = req.body.rating;
      movie.status = req.body.status;
      await movie.save();

      const result = await db.movies.findOne({ where: { id: movie.id } });
      res.status(200).json({ message: "Success update movice", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteMovie: async (req, res) => {
    try {
      const movie = await db.movies.destroy({ where: { id: req.params.id } });
      if (movie) {
        res.status(200).json({ message: "Success deleted" });
      } else {
        res.status(404).json({ message: "id not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
};
