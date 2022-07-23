import { Router } from "express";
import {
  addRental,
  listRentals,
} from "../controllers/createReadRentalControllers.js";
import validNewrental from "../middlewares/validNewRental.js";

const rentalsRoute = Router();

rentalsRoute.get("/rentals", listRentals);
rentalsRoute.post("/rentals", validNewrental, addRental);

rentalsRoute.post("/rentals/:id/return");
rentalsRoute.delete("/rentals/:id");

export default rentalsRoute;
