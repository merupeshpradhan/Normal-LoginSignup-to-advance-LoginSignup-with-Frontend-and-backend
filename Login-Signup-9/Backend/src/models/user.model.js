import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    required: [true, "Please enter your own email"],
  },
  avatar: {
    type: String, // cloudinary url
    required: [true, "Avatar is required"],
  },
  password: {
    type: String,
    required: [true, "Please create your password"],
  },
});

// Hashing password before saveing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// COMPARE PASSWORD
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Access and Refresh token

userSchema.methods.generateAccessToken  = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      DOB: this.DOB,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken  = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = mongoose.model("User", userSchema);
