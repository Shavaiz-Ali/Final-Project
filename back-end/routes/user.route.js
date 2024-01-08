import express from "express";
const router = express.Router();
import {
  signup,
  login,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  authenticate,
} from "../controllers/user.controller.js";
import { middlewareFunc } from "../middlewares/middlewares.js";
router.post("/signup", signup);
router.post("/login", login);
router.get("/me", middlewareFunc, authenticate);
router.get("/getAllUsers", getAllUsers);
router.get("/getSingleUser/:id", getSingleUser);
router.delete("/deleteSingleUser/:id", deleteSingleUser);
router.put("/updateSingleUser/:id", updateSingleUser);

export default router;
