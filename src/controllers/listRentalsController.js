import connection from "../dbStrategy/postgres.js";

export async function listRentals(req, res) {
  try {
    const { rows: rentalsData } = await connection.query(
      `SELECT rentals.*,json_build_object('id',customers.id,'name',customers.name) as customer,
      json_build_object('id',games.id,'name',games.name,'categoryId',games."categoryId",'categoryName',categories.name)as game
      FROM rentals 
      JOIN customers ON rentals."customerId"=customers.id 
      JOIN games ON rentals."gameId"=games.id
      JOIN categories ON games."categoryId"=categories.id`
    );
    res.send(rentalsData);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
