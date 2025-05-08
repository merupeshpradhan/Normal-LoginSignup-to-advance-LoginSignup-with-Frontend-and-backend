import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide Your Password"],
    minLength: [8, "Password must Contain at Least 8 characters!"],
    maxLength: [32, "Password Cannot exceed 32 characters!"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// HASING THE PASSWORD

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

export const User = mongoose.model("User", userSchema);
