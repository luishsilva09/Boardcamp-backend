import express from "express";
import {
  listCategories,
  addCategorie,
} from "../controllers/categoriesController.js";
import validCategorieName from "../middlewares/validCategorieName.js";

const categoriesRoute = express.Router();

categoriesRoute.get("/categories", listCategories);
categoriesRoute.post("/categories", validCategorieName, addCategorie);

export default categoriesRoute;
