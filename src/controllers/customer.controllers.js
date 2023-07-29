import { db } from "../database/database.js";

export async function postCustomersController(req, res) {

    const { name, phone, cpf, birthday } = req.body;
    
    try {
        const cpfExists = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [cpf]);
        if (cpfExists.rowCount > 0) {
            return res.status(409).send('CPF already exists');
        }
        await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`, [name, phone, cpf, birthday]);
        res.status(201).send('Customer created successfully');
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function putCustomersController(req, res) {
    const { name, phone, cpf, birthday } = req.body;
    const id = Number(req.params.id);
    try {
        const customers = await db.query("SELECT * FROM customers WHERE id=$1", [id]);
        if (customers.rows.length === 0){
            return res.status(404).send("Nenhum cliente cadastrado com este ID");
        }

        const customerAlreadyRegistered = await db.query("SELECT * FROM customers WHERE cpf=$1  AND id!=$02", [cpf, id]);
        if (customerAlreadyRegistered.rows.length != 0){
            return res.status(409).send("O CPF informado já está sendo utilizado em outro cadastro");
        }

        await db.query("UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id=$5", [name, phone, cpf, birthday, id]);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getAllCustomersController(req, res) {
    const { cpf } = req.query;
    try {
        if (cpf) {
            const customers = await db.query(`SELECT * FROM customers WHERE cpf LIKE $1;`, [`${cpf}%`]);
            return res.status(200).send(customers.rows);
        }
        const customers = await db.query(`SELECT * FROM customers`);
        res.status(200).send(customers.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}

export async function getOneCustomerController(req, res) {
    const { id } = req.params;
    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id = $1`, [id]);
        if (customer.rowCount === 0) {
            return res.sendStatus(404);
        }
        res.status(200).send(customer.rows[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

