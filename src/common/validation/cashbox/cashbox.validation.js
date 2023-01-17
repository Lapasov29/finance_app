import Joi from "joi";

export default Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    categoryId: Joi.string().required(),
    balance: Joi.number().required(),
    isInTotal: Joi.boolean().required(),
    userId: Joi.string().required()
})