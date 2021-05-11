"use strict";
const faker = require("faker");
const status = ["started", "ongoing", "ended"];
const languages = ["Mandarin", "Indonesia", "English", "Spanish", "Hindi"];
const movies = [...Array(30)].map((e) => ({
  name: faker.lorem.words(),
  language: languages[Math.round(Math.random() * 4)],
  status: status[Math.round(Math.random() * 2)],
  rating: Math.round(Math.random() * 4 + 1),
  deleted_at: null,
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movies", movies);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies");

  },
};
