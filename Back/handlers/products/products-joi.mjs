import Joi from "joi";

export const ProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required().min(10).max(300),
    category: Joi.string().required(),
    phone: Joi.string().required().min(9).max(15).regex(/^[0-9]+$/),
    image: Joi.object({
        url: Joi.array().items(Joi.string().uri()).required(),
        alt: Joi.string().required()
    }).required(),
    address: Joi.object({
        state: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.string().required(),
        zip: Joi.string().required()
    }).required(),
    sold: Joi.boolean().default(false),
    buyer: Joi.string()
});