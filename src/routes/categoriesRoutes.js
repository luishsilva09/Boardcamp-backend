import express from "express";
import {
  listCategories,
  addCategorie,
} from "../controllers/categoriesController.js";
import pagination from "../middlewares/pagination.js";
import validCategorieName from "../middlewares/validCategorieName.js";

const categoriesRoute = express.Router();

categoriesRoute.get("/categories", pagination, listCategories);
categoriesRoute.post("/categories", validCategorieName, addCategorie);

export default categoriesRoute;
