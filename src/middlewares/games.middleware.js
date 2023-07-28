import { db } from "../database/database";
import { gameSchema } from "../schemas/game.schema";

export async function gamesMiddleware(req, res, next){
    const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

    const validation = gameSchema.validate(req.body);
    if (!validation){
        return res.status(400).send(validation.error.message);
    }
    const nameExists = await db.query(`SELECT * FROM games WHERE name = $1`, [name]);

    if(nameExists){
        return res.status(409).send("This game name already exists");
    }
    if(stockTotal < 0 || pricePerDay < 0){
        return res.status(400).send("Total stock and Price per day must be greater than zero");
    }
    next();
}