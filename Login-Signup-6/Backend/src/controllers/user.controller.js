import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { set } from "mongoose";

const userSignup = asyncHandler(async (req, res) => {
  const { firstName, lastName, DOB, email, password } = req.body;

  if (!firstName || !lastName || !DOB || !email || !password) {
    throw new ApiError(400, "Please write down all input");
  }

  const findeEmail = await User.findOne({ email });
  if (findeEmail) {
    throw new ApiError(400, "This email is already exist in our side");
  }

  const dob = new Date(DOB);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of birth provided");
  }

  const fullName = `${firstName} ${lastName}`;

  const user = await User.create({
    fullName,
    DOB: dob,
    email,
    password,
  });

  // Generet tokens
  // const accessToken = user.generateAccessToken();
  // const refreshToken = user.generateRefreshToken();

  const userData = {
    id: user._id,
    fullName: user.fullName,
    DOB: user.DOB,
    email: user.email,
    // accessToken,
    // refreshToken,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User registered successfuly"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please write email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "This Email is not availabe in our area");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "This password is incorrect");
  }

  // Generate tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    nameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    nameSite: "Strict",
    maxAge: 10 * 24 * 60 * 60 * 1000,
  });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    DOB: user.DOB,
    email: user.email,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User Login successfuly"));
});

const userLogout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User Logout successfuly"));
});

export { userSignup, userLogin, userLogout };
