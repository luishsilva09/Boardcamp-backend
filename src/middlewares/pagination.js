import connection from "../dbStrategy/postgres.js";
export default async function pagination(req, res, next) {
  try {
    const offSet = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    let data;

    if (offSet) {
      data = `OFFSET ${offSet}`;
      res.locals.data = data;
    }
    if (limit) {
      data = `LIMIT ${limit}`;
      res.locals.data = data;
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
