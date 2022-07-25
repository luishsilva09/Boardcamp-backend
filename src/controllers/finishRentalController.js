import connection from "../dbStrategy/postgres.js";
import daysjs from "dayjs";

export async function finishRental(req, res) {
  try {
    const now = daysjs();
    const rentalId = req.params.id;
    await connection.query(
      `UPDATE rentals SET "returnDate"='${now}' WHERE rentals.id=$1`,
      [rentalId]
    );
    const { rows: rentalData } = await connection.query(
      `SELECT rentals.* ,games."pricePerDay" FROM rentals  
      JOIN games ON rentals."gameId"=games.id
      WHERE rentals.id=$1`,
      [rentalId]
    );

    const returnDate = daysjs(rentalData[0].rentDate).add(
      rentalData[0].daysRented,
      "day"
    );
    let delayFee = returnDate.diff(now, "day");

    if (delayFee < 0) {
      delayFee = delayFee * rentalData[0].pricePerDay * -1;
      await connection.query(
        `UPDATE rentals SET "delayFee"='${delayFee}' WHERE rentals.id=$1`,
        [rentalId]
      );
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
