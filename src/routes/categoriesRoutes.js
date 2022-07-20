import express from "express";
import {
  listCategories,
  addCategorie,
} from "../controllers/categoriesController.js";

const categoriesRoute = express.Router();

categoriesRoute.get("/categories", listCategories);
categoriesRoute.post("/categories", addCategorie);

export default categoriesRoute;
