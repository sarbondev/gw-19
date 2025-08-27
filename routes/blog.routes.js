import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  removeBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

export const BlogRoutes = express.Router();

BlogRoutes.get("/", getAllBlogs);
BlogRoutes.get("/:id", getBlogById);
BlogRoutes.delete("/:id", removeBlog);
BlogRoutes.post("/", createBlog);
BlogRoutes.put("/:id", updateBlog);
