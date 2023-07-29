import { Router } from "express";
import { postGameController } from "../controllers/games.controllers";
import { gamesMiddleware } from "../middlewares/games.middleware";

export const gameRouter = Router();

gameRouter.post('/games', gamesMiddleware, postGameController);