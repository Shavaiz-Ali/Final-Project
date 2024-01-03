import express from "express";
import {
  addProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post("/create", upload.single("product"), addProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getSingleProduct/:id", getSingleProduct);
router.delete("/getSingleProduct/:id", deleteSingleProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;
