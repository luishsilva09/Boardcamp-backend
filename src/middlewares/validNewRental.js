import joi from "joi";
import connection from "../dbStrategy/postgres.js";

export default async function validNewrental(req, res, next) {
  const rentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().required(),
    daysRented: joi.number().min(1).required(),
  });
  try {
    const { customerId, gameId, daysRented } = req.body;
    const { error } = rentalSchema.validate(req.body);
    if (error) {
      console.log(error);
      return res.sendStatus(400);
    }
    const { rows: existCustomer } = await connection.query(
      `SELECT * FROM customers WHERE id=$1`,
      [customerId]
    );
    const { rows: existGame } = await connection.query(
      `SELECT * FROM games WHERE id=$1`,
      [gameId]
    );
    const { rows: openRentals } = await connection.query(
      `SELECT rentals.*,games."stockTotal" FROM rentals 
      JOIN games ON games.id = rentals."gameId" 
      WHERE "returnDate" IS NULL AND games.id = ${gameId}`
    );
    if (
      existCustomer.length === 0 ||
      existGame.length === 0 ||
      openRentals.length >= existGame[0].stockTotal
    ) {
      return res.sendStatus(400);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
