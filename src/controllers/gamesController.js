import connection from "../dbStrategy/postgres.js";

export async function listGames(req, res) {
  try {
    res.send("lista jogos");
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
