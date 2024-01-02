import express from "express";
import {addProduct, getAllProducts, getSingleProduct, deleteSingleProduct, updateProduct} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/create", addProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getSingleProduct/:id", getSingleProduct);
router.delete("/deleteSingleProduct/:id", deleteSingleProduct);
router.put("/updateProduct/:id", updateProduct);

export default router