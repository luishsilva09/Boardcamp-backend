import connection from "../dbStrategy/postgres.js";

export async function listGames(req, res) {
  try {
    const gameName = req.query.name;
    const query = `SELECT games.*,categories.name as "categoryName" FROM games  
    JOIN categories 
    ON games."categoryId"=categories.id
   `;
    if (gameName) {
      const { rows: games } = await connection.query(
        `${query} WHERE games.name ilike '${gameName}%'`
      );
      return res.send(games);
    }
    const { rows: games } = await connection.query(query);
    res.send(games);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function addGame(req, res) {
  try {
    const { name, image, stockTotal, categoryId, pricePerDay } =
      res.locals.gameData;
    await connection.query(
      `INSERT INTO games(name,image,"stockTotal","categoryId","pricePerDay" ) 
      VALUES ('${name}','${image}','${stockTotal}','${categoryId}','${pricePerDay}')`
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
