import { Router } from "express";
import { listGames, addGame } from "../controllers/gamesController.js";

const gamesRoute = Router();

gamesRoute.get("/games", listGames);
gamesRoute.post("/games", addGame);

export default gamesRoute;
