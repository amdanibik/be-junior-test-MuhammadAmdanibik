const db = require("../config/database/database");
const model = require("../config/model/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let movie_cast = await db.query(
      "SELECT movie_casts.id,movie_casts.movie_id,movie_casts.cast_id,movies.name AS nameMovie,movies.rating AS ratingMovies, casts.name AS nameActor,casts.birthday,casts.deadday FROM movie_casts LEFT JOIN movies ON movie_casts.movie_id = movies.id LEFT JOIN casts ON movie_casts.cast_id = casts.id"
    );
    if (movie_cast.length > 0) {
      res.status(200).json({
        message: "Get All Method Movie Cast",
        data: movie_cast,
      });
    } else {
      res.status(200).json({
        message: "Tidak Ada Data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.getOne = async function (req, res) {
  try {
    let movie_cast = await model.movie_cast.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (movie_cast.length > 0) {
      res.status(200).json({
        message: "Movie Cast Ditemukan",
        data: movie_cast,
      });
    } else {
      res.status(200).json({
        message: "Tidak Ada Data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.post = async function (req, res) {
  try {
    let movie_cast = await model.movie_cast.create({
      movie_id: req.body.movie_id,
      cast_id: req.body.cast_id,
    });
    res.status(201).json({
      message: "Berhasil Menambahkan Movie Cast",
      data: movie_cast,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let movie_cast = await model.movie_cast.update(
      {
        movie_id: req.body.movie_id,
        cast_id: req.body.cast_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({
      message: "Berhasil Mengubah Data Movie Cast",
      data: movie_cast,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let movie_cast = await model.movie_cast.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: "Berhasil Hapus Data Movie Cast",
      data: movie_cast,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
