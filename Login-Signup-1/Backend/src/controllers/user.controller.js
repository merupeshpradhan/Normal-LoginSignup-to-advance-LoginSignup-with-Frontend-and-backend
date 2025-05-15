import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, dateOfBirth, email, password } = req.body;

  if (!fullName || !dateOfBirth || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "User with this email already exists");
  }

  const dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of birth format");
  }

  const user = await User.create({
    fullName,
    dateOfBirth: dob,
    email,
    password,
  });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    dateOfBirth: user.dateOfBirth,
    email: user.email,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User Register Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please Provide email and Password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "Email does not exist");
  }

  const isPasswordCorrect = user.password === password;

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Email or password is incorrect");
  }

  const userData = {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User logged in successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User Logged out successfully"));
});

export { registerUser, loginUser, logoutUser };
