import { Router } from "express";
import { addRental } from "../controllers/addRentalControllers.js";
import { deleteRental } from "../controllers/deleteRentalController.js";
import { finishRental } from "../controllers/finishRentalController.js";
import { listRentals } from "../controllers/listRentalsController.js";
import { existRental } from "../middlewares/existRental.js";
import validNewrental from "../middlewares/validNewRental.js";

const rentalsRoute = Router();

rentalsRoute.get("/rentals", listRentals);
rentalsRoute.post("/rentals", validNewrental, addRental);

rentalsRoute.post("/rentals/:id/return", existRental, finishRental);
rentalsRoute.delete("/rentals/:id", existRental, deleteRental);

export default rentalsRoute;
