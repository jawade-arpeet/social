import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("user", userModel);

export default user;