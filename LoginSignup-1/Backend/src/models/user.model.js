import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trime: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowecase: true,
    trime: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

export const User = mongoose.model("User", userSchema);
