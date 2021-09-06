import Joi from "joi";

export const createMovieSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),

  language: Joi.string().trim().min(3).max(30).required(),

  status: Joi.string().trim().min(3).max(10).required(),

  rating: Joi.number().min(1).max(5).required(),
});

export const updateMovieSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).optional(),

  language: Joi.string().trim().min(3).max(30).optional(),

  status: Joi.string().trim().min(3).max(10).optional(),

  rating: Joi.number().min(1).max(5).optional(),
});
