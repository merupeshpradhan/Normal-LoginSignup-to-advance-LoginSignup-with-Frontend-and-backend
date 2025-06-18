import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is absent"],
    },
    fatherName: {
      type: String,
      required: [true, "Father name is absent"],
    },
    motherName: {
      type: String,
      required: [true, "Mother name is absent"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone name is absent"],
    },
    villageName: {
      type: String,
      required: [true, "Village name is absent"],
    },

    email: {
      type: String,
      required: [true, "Please provide your usefull email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please set your usefull password"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// HASSING THE PASSWORD

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Add method to compare password

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
