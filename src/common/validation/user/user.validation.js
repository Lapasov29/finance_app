import Joi from "joi";

export const register = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .required(),
    email: Joi.string()
        .email()
        .trim()
        .required(),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .trim()
})

export const loginUsers = Joi.object({
    email:Joi.string()
        .email()
        .min(3)
        .max(30)
        .trim()
        .required(),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .trim()

})