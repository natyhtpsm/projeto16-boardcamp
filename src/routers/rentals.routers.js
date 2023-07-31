import { Router } from "express";
import { rentalsMiddleware } from "../middlewares/rentals.middleware.js";
import { getRentalController, postRentalController, postRentalIdController, deleteRentalController } from "../controllers/rentals.controller.js";


const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentalController);
rentalsRouter.post("/rentals", rentalsMiddleware, postRentalController);
rentalsRouter.put("/rentals/:id/return", postRentalIdController);
rentalsRouter.delete("/rentals/:id", deleteRentalController);


export default rentalsRouter;