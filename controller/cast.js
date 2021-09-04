const model = require("../config/model/index");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let cast = await model.cast.findAll({
      // attribut digunakan untuk menampilkan beberapa field yang akan di tampilkan di api
      // attributes: ["name", "birthday", "deadday"],
    });
    if (cast.length > 0) {
      res.status(200).json({
        message: "Get All Method Cast",
        data: cast,
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
    let cast = await model.cast.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (cast.length > 0) {
      res.status(200).json({
        message: "Cast Ditemukan",
        data: cast,
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
    let cast = await model.cast.create({
      name: req.body.name,
      birthday: req.body.birthday,
      deadday: req.body.deadday,
      rating: req.body.rating,
    });
    res.status(201).json({
      message: "Berhasil Menambahkan Cast",
      data: cast,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let cast = await model.cast.update(
      {
        name: req.body.name,
        birthday: req.body.birthday,
        deadday: req.body.deadday,
        rating: req.body.rating,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({
      message: "Berhasil Mengubah Data Cast",
      data: cast,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let cast = await model.cast.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: "Berhasil Hapus Data Cast",
      data: cast,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
