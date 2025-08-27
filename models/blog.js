import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  description: String,
  image: String,
  tags: [String],
});

export const Blogs = model("Blog", BlogSchema);
