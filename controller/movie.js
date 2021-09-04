const model = require("../config/model/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let movie = await model.movie.findAll({
      // attribut digunakan untuk menampilkan beberapa field yang akan di tampilkan di api
      // attributes: ["id", "name"],
    });
    if (movie.length > 0) {
      res.status(200).json({
        message: "Get All Method Movie",
        data: movie,
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
    let movie = await model.movie.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (movie.length > 0) {
      res.status(200).json({
        message: "Movie Ditemukan",
        data: movie,
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
    let movie = await model.movie.create({
      name: req.body.name,
      language: req.body.language,
      status: req.body.status,
      rating: req.body.rating,
    });
    res.status(201).json({
      message: "Berhasil Menambahkan Movie",
      data: movie,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let movie = await model.movie.update(
      {
        name: req.body.name,
        language: req.body.language,
        status: req.body.status,
        rating: req.body.rating,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({
      message: "Berhasil Mengubah Data Movie",
      data: movie,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let movie = await model.movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: "Berhasil Hapus Data Movie",
      data: movie,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
