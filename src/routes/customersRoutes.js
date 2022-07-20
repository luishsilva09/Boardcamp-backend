import { Router } from "express";
import {
  updateCustomer,
  addCustomer,
} from "../controllers/editCustomersController.js";
import {
  listCustomers,
  findCustomer,
} from "../controllers/customersController.js";

const customersRoute = Router();

customersRoute.get("/customers", listCustomers);
customersRoute.get("/customers/:id", findCustomer);

customersRoute.post("/customers", addCustomer);
customersRoute.put("/customers/:id", updateCustomer);

export default customersRoute;
