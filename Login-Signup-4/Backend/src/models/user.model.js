import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model("User", userSchema);
