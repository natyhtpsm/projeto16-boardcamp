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

export async function getGamesController(req, res){
    const name = req.query.name;
    try {
        if(!name){
            const result = await db.query(`SELECT * FROM games`);
            return res.send(result.rows);
        }
        const result = await db.query(`SELECT * FROM games WHERE name ILIKE $1`, [name + '%']);
        return res.send(result.rows);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}