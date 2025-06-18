import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please Provide Full Name"],
    },
    motherName: {
      type: String,
      required: [true, "Please Provide Full Your Mother Full Name"],
    },
    fatherName: {
      type: String,
      required: [true, "Please Provide Your Father Full Name"],
    },
    DOB: {
      type: Date,
      required: [true, "please Provide Birthday Date"],
    },
    email: {
      type: String,
      required: [true, "Please Provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Set Your Password"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
