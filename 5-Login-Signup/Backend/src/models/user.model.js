import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  stateName: {
    type: String,
    required: [true, "Please provide your State name"],
  },
  distName: {
    type: String,
    required: [true, "Please provide your district name"],
  },
  villageName: {
    type: String,
    required: [true, "Please provide your Village name"],
  },
  password: {
    type: String,
    required: [true, "Please set your password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// HASSING THE PASSWORD

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Add method to compare password

userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
