var Sequelize = require("sequelize");

var db = new Sequelize("restapi_express", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
