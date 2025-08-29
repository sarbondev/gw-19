import { Router } from "express";
import {
  register,
  login,
  getMe,
  getAllUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const UserRoutes = Router();

UserRoutes.get("/", getAllUser);
UserRoutes.post("/register", register);
UserRoutes.post("/login", login);
UserRoutes.get("/me", authMiddleware, getMe);
