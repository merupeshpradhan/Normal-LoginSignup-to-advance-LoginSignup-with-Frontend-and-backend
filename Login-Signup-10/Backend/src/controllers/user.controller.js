import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const userRegister = asyncHandler(async (req, res) => {
  const { firstName, middleName, lastName, DOB, email, password } = req.body;

  if (!firstName || !lastName || !DOB || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const userName = `${firstName} ${middleName} ${lastName}`;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "This email is already existes");
  }

  const dob = new Date(DOB);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of birth you provide");
  }

  const user = await User.create({
    userName,
    DOB: dob,
    email,
    password,
  });

  const userData = {
    id: user._id,
    userName: user.userName,
    DOB: user.DOB,
    email: user.email,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User register succefully"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please erite required email or password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(
      400,
      "This email is not registered. Please signup up first"
    );
  }

  const isPasswordcorrect = await user.comparePassword(password);
  if (!isPasswordcorrect) {
    throw new ApiError(400, "This Password is not correct");
  }

  const accessToken = await user.generateAccesstoken();
  const refreshToken = await user.generateRefreshToken();

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };

  res.cookie("accessToken", accessToken, options);
  res.cookie("refreshToken", refreshToken, options);

  const userData = {
    _id: user._id,
    userName: user.userName,
    DOB: user.DOB,
    email: user.email,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User Login successfuly"));
});

const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User Logout successfuly"));
});

export { userRegister, userLogin, userLogout };
