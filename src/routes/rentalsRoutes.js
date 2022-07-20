import { Router } from "express";

const retalsRoute = Router();

retalsRoute.get("/retals");
retalsRoute.post("/retals");
retalsRoute.post("/rentals/:id/return");
retalsRoute.delete("/rentals/:id");

export default retalsRoute;
