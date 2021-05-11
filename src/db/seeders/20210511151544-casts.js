"use strict";
const fs = require("fs");
const rawData = fs.readFileSync("./src/db/dummies/casts.json", {
  encoding: "utf8",
  flag: "r",
});
const casts = JSON.parse(rawData).map((cast) => ({
  ...cast,
  created_at: new Date(),
  updated_at: new Date(),
  deleted_at: null,
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("casts", casts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("casts");
  },
};
