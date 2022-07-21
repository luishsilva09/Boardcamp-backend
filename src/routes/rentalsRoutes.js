import { Router } from "express";

const rentalsRoute = Router();

rentalsRoute.get("/rentals");
rentalsRoute.post("/rentals");
rentalsRoute.post("/rentals/:id/return");
rentalsRoute.delete("/rentals/:id");

export default rentalsRoute;
