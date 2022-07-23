import joi from "joi";
import connection from "../dbStrategy/postgres.js";

export default async function validNewGame(req, res, next) {
  const gameSchema = joi.object({
    name: joi.string().trim().required(),
    image: joi.string(),
    stockTotal: joi.number().min(1).required(),
    pricePerDay: joi.number().min(1).required(),
    categoryId: joi.number().required(),
  });
  try {
    const gameData = req.body;
    const { rows: existCategorie } = await connection.query(
      `SELECT * FROM categories WHERE id=$1`,
      [gameData.categoryId]
    );
    const { error } = gameSchema.validate(gameData);
    if (existCategorie.length === 0 || error) {
      return res.sendStatus(400);
    }
    const { rows: existGame } = await connection.query(
      `SELECT * FROM games WHERE name=$1`,
      [gameData.name]
    );
    if (existGame.length > 0) {
      return res.sendStatus(409);
    }
    res.locals.gameData = gameData;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
