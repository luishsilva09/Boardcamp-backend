import joi from "joi";
import connection from "../dbStrategy/postgres.js";

export default async function validCategorieName(req, res, next) {
  const validName = joi.object({
    name: joi.string().trim().required(),
  });
  try {
    const name = req.body;
    const { error } = validName.validate(name);
    if (error) {
      return res.sendStatus(400);
    }
    const existCat = await connection.query(
      `SELECT * FROM categories WHERE name='${name.name.trim()}'`
    );
    if (existCat.rowCount !== 0) {
      return res.sendStatus(409);
    }
    res.locals.name = name;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
