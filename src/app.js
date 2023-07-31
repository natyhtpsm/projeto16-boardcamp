import express from "express";
import cors from "cors";
import { gameRouter } from "./routers/game.routers.js";
import { customerRouter } from "./routers/customer.routers.js";
import rentalsRouter from "./routers/rentals.routers.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(gameRouter);
app.use(customerRouter);
app.use(rentalsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})