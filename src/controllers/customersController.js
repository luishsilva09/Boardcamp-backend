import connection from "../dbStrategy/postgres.js";

export async function listCustomers(req, res) {
  try {
    const cpf = req.query.cpf;
    const { rows: customers } = await connection.query(
      `SELECT * FROM customers `
    );
    if (cpf) {
      const { rows: customers } = await connection.query(
        `SELECT * FROM customers WHERE cpf like '${cpf}%' `
      );
      return res.send(customers);
    }
    res.send(customers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function findCustomer(req, res) {
  try {
    res.send("procurando cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
