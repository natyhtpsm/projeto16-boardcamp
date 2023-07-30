import { customerSchema } from "../schemas/customers.schema.js";

export function customersMiddleware(req, res, next) {
    const { name, phone, cpf, birthday } = req.body;

    const validation = customerSchema.validate({ name, phone, cpf, birthday });

    if (validation.error) {
        return res.status(400).send(validation.error.message);
    }

    if (name.length === 0) {
        return res.status(400).send('Invalid name');
    }

    if (cpf.length !== 11) {
        return res.status(400).send('Invalid CPF');
    }

    if (phone.length !== 11) {
        return res.status(400).send('Invalid phone number');
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthday)) {
        return res.status(400).send('Invalid date format');
    }

    next();
}

