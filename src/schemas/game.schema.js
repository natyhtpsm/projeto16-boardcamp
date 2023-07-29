import joi from "joi";

export const gameSchema = joi.object({
    name: joi.string().min(2).required(),
    image: joi.required(),
    stockTotal: joi.number().min(2).required(),
    pricePerDay: joi.number().min(2).required()
});
