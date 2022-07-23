import connection from "../dbStrategy/postgres.js";

export async function addCustomer(req, res) {
  try {
    const { name, phone, cpf, birthday } = res.locals.customerData;
    await connection.query(
      `INSERT INTO customers(name,phone,cpf,birthday) values ('${name}','${phone}','${cpf}','${birthday}')`
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function updateCustomer(req, res) {
  try {
    const { name, phone, cpf, birthday } = res.locals.customerData;
    const id = req.params.id;
    await connection.query(
      `UPDATE customers SET name='${name}', phone='${phone}',cpf='${cpf}',birthday='${birthday}' WHERE id=$1`,
      [id]
    );
    res.send("atualizar cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
