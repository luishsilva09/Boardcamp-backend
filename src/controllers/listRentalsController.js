import connection from "../dbStrategy/postgres.js";

export async function listRentals(req, res) {
  try {
    const customerId = parseInt(req.query.customerId);
    const gameId = parseInt(req.query.gameId);

    const query = `
        SELECT rentals.*,json_build_object('id',customers.id,'name',customers.name) as customer,
        json_build_object('id',games.id,'name',games.name,'categoryId',games."categoryId",'categoryName',categories.name)as game
        FROM rentals 
        JOIN customers ON rentals."customerId"=customers.id 
        JOIN games ON rentals."gameId"=games.id
        JOIN categories ON games."categoryId"=categories.id`;

    if (customerId && gameId) {
      const { rows: rentalsData } = await connection.query(
        `${query} WHERE rentals."gameId"=$1 AND rentals."customerId"=$2`,
        [gameId, customerId]
      );
      return res.send(rentalsData);
    }
    if (customerId) {
      const { rows: rentalsData } = await connection.query(
        `${query} WHERE customers.id=$1`,
        [customerId]
      );
      return res.send(rentalsData);
    }
    if (gameId) {
      const { rows: rentalsData } = await connection.query(
        `${query} WHERE games.id=$1`,
        [gameId]
      );
      return res.send(rentalsData);
    }
    const { rows: rentalsData } = await connection.query(`${query} `);
    res.send(rentalsData);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
