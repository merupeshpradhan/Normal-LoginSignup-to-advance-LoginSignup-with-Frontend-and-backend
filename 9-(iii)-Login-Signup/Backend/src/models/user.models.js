import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  userName: { type: String, required: [true, "Enter your full name"] },
  DOB: { type: Date, required: [true, "Enter your date of Birth"] },
  email: { type: String, required: [true, "Enter your email"], unique: true },
  avatar: { type: String, required: [true, "Please provide your photos"] },
  extraPhoto: { type: String },
  password: { type: String, required: [true, "Create Your usefuly password"] },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Access and Refresh Token

userSchema.methods.generateAccesstoken = function () {
  return jwt.sign(
    {
      _id: this._id,
      userName: this.userName,
      DOB: this.DOB,
    },
    process.env.ACCESS_TOKEN_SCRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SCRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
