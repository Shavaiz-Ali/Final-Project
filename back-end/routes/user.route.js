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
router.get("/getAllUsers", middlewareFunc, getAllUsers);
router.get("/getSingleUser/:id", middlewareFunc, getSingleUser);
router.delete("/deleteSingleUser/:id", middlewareFunc, deleteSingleUser);
router.put("/updateSingleUser/:id", middlewareFunc, updateSingleUser);

export default router;
