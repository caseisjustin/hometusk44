import Joi from "joi";

const userValidSchema = Joi.object({
    email: Joi.string().email().trim(true).required(),
    password: Joi.string().min(8).trim(true).required(),
    role: Joi.string().required()
})


export { userValidSchema };