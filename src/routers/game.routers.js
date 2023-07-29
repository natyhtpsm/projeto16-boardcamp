import { Router } from "express";
import { getGamesController, postGameController } from "../controllers/games.controllers.js";
import { gamesMiddleware } from "../middlewares/games.middleware.js";

export const gameRouter = Router();

gameRouter.post('/games', gamesMiddleware, postGameController);
gameRouter.get('/games', getGamesController);