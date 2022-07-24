import daysjs from "dayjs";
import connection from "../dbStrategy/postgres.js";

export async function listRentals(req, res) {
  try {
    res.send("listar");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function addRental(req, res) {
  try {
    const { customerId, gameId, daysRented } = req.body;
    const now = daysjs().format("YYYY-MM-DD");
    const { rows: gamePrice } = await connection.query(
      `SELECT games."pricePerDay" FROM games WHERE id=$1`,
      [gameId]
    );
    const rentalData = {
      customerId,
      gameId,
      rentDate: now,
      daysRented,
      returnDate: null,
      originalPrice: daysRented * gamePrice[0].pricePerDay,
      delayFee: null,
    };
    await connection.query(
      `INSERT INTO rentals("customerId","gameId","rentDate","daysRented","returnDate","originalPrice","delayFee")
      VALUES('${customerId}','${gameId}','${now}','${daysRented}',NULL,'${
        daysRented * gamePrice[0].pricePerDay
      }',NULL)`
    );
    res.send(rentalData);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
