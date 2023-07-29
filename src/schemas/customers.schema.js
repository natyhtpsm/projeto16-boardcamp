import joi from "joi";

export const customerSchema = joi.object({
    name: joi.string().required(),
    phone: joi.number().required(),
    cpf: joi.required(),
    birthday: joi.required(),
});