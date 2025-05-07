import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "User with this email already exists");
  }

  const user = await User.create({ fullName, email, password });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User registered successfully"));
});

const loginUser = async (req, res) => {};
const logoutUser = async (req, res) => {};

export { registerUser, loginUser, logoutUser };
