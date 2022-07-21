import connection from "../dbStrategy/postgres.js";

export async function listCategories(req, res) {
  try {
    const categories = await connection.query(`SELECT * FROM categories`);
    res.send(categories.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function addCategorie(req, res) {
  try {
    const name = res.locals.name;
    await connection.query(
      `INSERT INTO categories(name) VALUES ('${name.name}')`
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
