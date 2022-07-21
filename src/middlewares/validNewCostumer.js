import joi from "joi";
import joiDate from "@joi/date";
import connection from "../dbStrategy/postgres.js";

export default async function validNewCostumer(req, res, next) {
  const costumerSchema = joi.object({
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
    const costumerData = req.body;
    const { error } = costumerSchema.validate(costumerData, {
      abortEarly: false,
    });
    console.log(error);
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
