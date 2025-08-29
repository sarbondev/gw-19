import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

import { BlogRoutes } from "./routes/blog.routes.js";
import { UserRoutes } from "./routes/user.routes.js";

config();

const app = express();

app.use(cors());
app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("Welcome to my app"));
app.use("/blogs", BlogRoutes);
app.use("/users", UserRoutes);

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
      app.listen(PORT, () => {
        console.log(`Server http://localhost:${PORT} portda ishlamoqda...`);
      });
    });
  } catch (error) {
    console.error(
      "MongoDB ga ulanish muvaffaqiyatsiz amalga oshirildi!",
      error.message
    );
  }
};

connectDB();
