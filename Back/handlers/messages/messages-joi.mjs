import Joi from "joi";

const messageValidationSchema = Joi.object({
    sender: Joi.string().required(),
    email: Joi.string().email().required(),
    text: Joi.string().required(),
});

export { messageValidationSchema };