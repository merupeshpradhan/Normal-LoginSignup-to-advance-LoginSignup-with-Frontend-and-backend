import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    DOB: {
      type: Date,
      required: [true, "Please enter your date of birth"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: [true, "Please enter for your password"],
    },
  },
  { timeStamps: true }
);

// HASSING IN PASSWORD

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
