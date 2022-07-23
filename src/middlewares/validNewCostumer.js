import joi from "joi";
import connection from "../dbStrategy/postgres.js";

export default async function validNewCustomers(req, res, next) {
  const customerSchema = joi.object({
    name: joi.string().trim().required(),
    phone: joi
      .string()
      .pattern(/[0-9]{10,11}/)
      .required(),
    cpf: joi
      .string()
      .pattern(/[0-9]{11}/)
      .required(),
    birthday: joi.date().iso().required(),
  });
  try {
    const customerData = req.body;
    const { error } = customerSchema.validate(customerData, {
      abortEarly: false,
    });

    if (error) {
      return res.sendStatus(400);
    }
    const existCustomer = await connection.query(
      `SELECT * FROM customers WHERE cpf='${customerData.cpf}'`
    );
    if (existCustomer.rowCount !== 0) {
      if (existCustomer.rows[0].id === parseInt(req.params.id)) {
        res.locals.customerData = customerData;
        next();
        return;
      }
      return res.sendStatus(409);
    }

    res.locals.customerData = customerData;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
