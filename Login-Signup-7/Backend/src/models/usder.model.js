import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  DOB: {
    type: Date,
    required: [true, "Please enter your date of birth"],
  },
  email: {
    type: String,
    required: "Please enter your own email",
  },
  avtar: {
    type: String, // cloudinary url
    required: true,
  },
  password: {
    type: String,
    required: [true, "Please create your password"],
  },
});

export const User = mongoose.model("User", userSchema);
