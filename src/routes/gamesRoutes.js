import { Router } from "express";
import { listGames, addGame } from "../controllers/gamesController.js";
import validNewGame from "../middlewares/validNewGame.js";

const gamesRoute = Router();

gamesRoute.get("/games", listGames);
gamesRoute.post("/games", validNewGame, addGame);

export default gamesRoute;
