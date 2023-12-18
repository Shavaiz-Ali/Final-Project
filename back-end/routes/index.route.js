// index.route.js
import express  from "express";
const router   = express.Router();
import userRoute  from "./user.route.js";
import productRoute from "./product.route.js";

// routes 
router.use("/user", userRoute);
router.use("/products", productRoute);

export default router;
