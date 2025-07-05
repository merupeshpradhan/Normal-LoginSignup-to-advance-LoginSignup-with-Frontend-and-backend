import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const userRegister = asyncHandler(async (req, res) => {
  const { firstName, middleName, lastName, DOB, email, password } = req.body;

  if (!firstName || !lastName || !DOB || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const name = `${firstName} ${middleName ? middleName + "" : ""} ${lastName}`;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(
      400,
      "User with this email is already exist in our system"
    );
  }

  // Photo Upload
  const avatarLocalPath = req.file?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  console.log("Local file path:", avatarLocalPath);

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) {
    console.error("Cloudinary upload failed. Path ", avatarLocalPath);

    throw new ApiError(400, "Failed to upload avatar to Cloudinayry");
  }

  const dob = new Date(DOB);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of birth you provided");
  }

  const user = await User.create({
    name,
    DOB: dob,
    email,
    avatar: avatar.url,
    password,
  });

  const userData = {
    id: user._id,
    name: user.name,
    DOB: user.DOB,
    email: user.email,
    avatar: user.avatar,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User register successfully"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Required your email or password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "This email is not exist in our area");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "You give wrong password");
  }

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  };

  res.cookie("accessToken", accessToken, options);
  res.cookie("refreshToken", refreshToken, options);

  const userData = {
    id: user._id,
    name: user.name,
    DOB: user.DOB,
    email: user.email,
    avatar: user.avatar,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User Login Succefully"));
});

const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User Logout successfuly"));
});

export { userRegister, userLogin, userLogout };
