"use strict";
const faker = require("faker");
const casts = [...Array(8)].map((e) => ({
  name: faker.name.findName(),
  birthday: faker.date.past(),
  deadday: null,
  rating: Math.round(Math.random() * 4 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("casts", casts);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("casts");
  },
};
