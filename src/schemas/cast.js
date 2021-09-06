import Joi from "joi";

export const createCastSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),

  birthday: Joi.date().less("now").required(),

  deadday: Joi.date()
    .greater(Joi.ref("birthday"))
    .max("now")
    .allow(null)
    .allow("")
    .optional(),

  rating: Joi.number().min(1).max(5).required(),
});

export const updateCastSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).optional(),

  birthday: Joi.date().less("now").optional(),

  deadday: Joi.date()
    .greater(Joi.ref("birthday"))
    .max("now")
    .allow(null)
    .optional(),

  rating: Joi.number().min(1).max(5).optional(),
});
