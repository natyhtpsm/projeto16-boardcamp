import joi from "joi";

export const customerSchema = joi.object({
    name: joi.string().min(2).required(),
    phone: joi.number().min(2).required(),
    cpf: joi.string().min(11).required(),
    birthday: joi.required(),
});
