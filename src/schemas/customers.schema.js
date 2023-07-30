import joi from "joi";

export const customerSchema = joi.object({
    name: joi.string().min(2).required(),
    phone: joi.number().min(2).required(),
    cpf: joi.string().pattern(/^\d{11}$/).required(),
    birthday: joi.string().isoDate().required()
});
