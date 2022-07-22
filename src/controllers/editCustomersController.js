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
    res.send("atualizar cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
