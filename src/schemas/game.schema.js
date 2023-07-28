import Joi from "joi";

export const gameSchema = joi.object({
    name: joi.string().min(1).required(),
    image: joi.required(),
    stockTotal: joi.number().min(1).required(),
    pricePerDay: joi.number().min(1).required(),
    categoryId: joi.number().min(1).required()
});
