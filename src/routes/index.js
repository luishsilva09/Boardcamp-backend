import express from "express";
import categoriesRoute from "./categoriesRoutes.js";
import gamesRoute from "./gamesRoutes.js";
import customersRoute from "./customersRoutes.js";
import retalsRoute from "./rentalsRoutes.js";

const router = express.Router();

router.use(categoriesRoute);
router.use(gamesRoute);
router.use(customersRoute);
router.use(retalsRoute);

export default router;
