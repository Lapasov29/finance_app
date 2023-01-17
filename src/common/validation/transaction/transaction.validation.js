import Joi from "joi";

export default Joi.object({
  type: Joi.string().min(3).max(30).required(),

  amount: Joi.number().min(0).required(),

  cashboxId: Joi.string().required(),

  categoryId: Joi.string().required(),

  date: Joi.date().required(),

  comment: Joi.string().min(3).max(1600),
});
