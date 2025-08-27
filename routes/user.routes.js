import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";

export const UserRoutes = express.Router();

UserRoutes.get("/", getAllUsers);
