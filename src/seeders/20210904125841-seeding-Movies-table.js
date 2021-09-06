"use strict";

const faker = require("faker");

const status = ["started", "ongoing", "pending", "ended"];
const languages = ["English", "Indonesian", "Korean", "Thai"];
const movies = [...Array(10)].map((movie) => ({
  name: faker.lorem.words(),
  language: languages[Math.round(Math.random() * 3)],
  status: status[Math.round(Math.random() * 3)],
  rating: Math.round(Math.random() * 4 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Movies", movies);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movies");
  },
};
