import { db } from "../database/database";

export async function postGameController(req, res){
    const { name, image, stockTotal, pricePerDay } = req.body;
    try{
        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay]);
        return res.status(201).send("Game created");
    }
    catch(e){
        console.log(e.message);
    }
}