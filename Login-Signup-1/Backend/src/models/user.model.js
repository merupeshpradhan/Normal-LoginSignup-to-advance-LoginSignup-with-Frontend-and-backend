import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please Provide Your Full Name"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please Provide Your DOB"],
    },
    email: {
      type: String,
      required: [true, "Please Provide Your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Pleaser provide Your Password"],
      minLength: [8, "Password must Contain at Least 8 characters!"],
      maxLength: [32, "Password Cannot exceed 8 characters!"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
