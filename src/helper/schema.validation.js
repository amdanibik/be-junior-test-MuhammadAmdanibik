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

module.exports = {
  createCast,
  updateCast
};
