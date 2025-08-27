import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  phoneNumber: { type: String, required: true },
  fullName: { type: String, require: true },
  password: { type: String, required: true },
});

export const User = model("User", UserSchema);
