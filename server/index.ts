import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server is up and runnning on port", process.env.PORT);
});
