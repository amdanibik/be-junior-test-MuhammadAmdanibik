const yup = require("yup");

let createCast = yup.object().shape({
  name: yup.string().required(),
  birthday: yup.date().nullable(),
  deadday: yup.date().nullable(),
  rating: yup.number().required().max(5).min(0),
});

let updateCast = yup.object().shape({
  name: yup.string(),
  birthday: yup.date().nullable(),
  deadday: yup.date().nullable(),
  rating: yup.number().max(5).min(0),
});

let createMovie = yup.object().shape({
  name: yup.string().required(),
  language: yup.string().required(),
  status: yup.string().required(),
  rating: yup.number().required().max(5).min(0),
  casts: yup.array().min(1)
});

module.exports = {
  createCast,
  updateCast,
  createMovie
};
