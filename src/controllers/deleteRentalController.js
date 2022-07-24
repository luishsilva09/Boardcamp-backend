import connection from "../dbStrategy/postgres.js";

export async function deleteRental(req, res) {
  try {
    const rentalId = req.params.id;
    await connection.query(`DELETE FROM rentals WHERE id=$1`, [rentalId]);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
