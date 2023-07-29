import { customerSchema } from "../schemas/customers.schema.js";

export function customersMiddleware(req, res, next) {
    const { name, phone, cpf, birthday } = req.body;
    const { error } = customerSchema.validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    if (cpf.length !== 11) {
        return res.status(400).send('Invalid CPF');
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthday)) {
        return res.status(400).send('Invalid date format');
    }
    next();
}

