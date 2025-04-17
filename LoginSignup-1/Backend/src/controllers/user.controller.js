import { User } from "../models/user.model.js";
import { AppiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if ([fullName, email, password].some((field) => field?.trim() === "")) {
    throw new AppiError(409, "All fields are required");
  }

  const existedUser = await User.findOne({
    email,
  });

  if (existedUser) {
    throw new AppiError(409, "Email already exists ");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, "User registered successfully"));
});
