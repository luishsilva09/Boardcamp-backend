import connection from "../dbStrategy/postgres.js";

export async function existRental(req, res, next) {
  try {
    const rentalId = req.params.id;
    const { rows: existRental } = await connection.query(
      `SELECT * FROM rentals WHERE rentals.id=$1`,
      [rentalId]
    );
    if (existRental.length === 0) {
      return res.sendStatus(404);
    }
    if (existRental[0].returnDate !== null) {
      return res.sendStatus(400);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
