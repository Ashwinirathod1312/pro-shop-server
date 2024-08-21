import express from "express";
import { getParticularProductController, productController } from "../controller/productController.js";

const route = express.Router();
route.route('/').get(productController)
route.route('/:id').get(getParticularProductController)

export default route;
