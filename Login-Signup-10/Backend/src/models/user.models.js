import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  userName: { type: String, required: [true, "Enter your full name"] },
  DOB: { type: Date, required: [true, "Enter your date of Birth"] },
  email: { type: String, required: [true, "Enter your email"] },
  password: { type: String, required: [true, "Create Your usefuly password"] },
});

userSchema.pre("save", async function (next) {
  if (!this.password("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.method.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Access and Refresh Token

userSchema.method.generateAccesstoken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      DOB: this.DOB,
    },
    process.env.ACCESS_TOKEN_SCRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.method.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SCRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
