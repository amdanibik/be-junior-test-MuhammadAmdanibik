"use strict";
const randomMovieNames = require("random-movie-names");
const status = ["started", "ongoing", "ended"];
const languages = ["Indonesia", "Hindi", "English", "Spanish", "Korean"];

const movies = [...Array(20)].map((e) => ({
  name: randomMovieNames()
    .replace(/([A-Z])/g, " $1")
    .trim(),
  language: languages[Math.round(Math.random() * 4)],
  status: status[Math.round(Math.random() * 2)],
  rating: Math.round(Math.random() * 4 + 1),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movies", movies);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies");
  },
};
