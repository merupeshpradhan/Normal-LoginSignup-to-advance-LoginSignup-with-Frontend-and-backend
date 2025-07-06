import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const userRegister = asyncHandler(async (req, res) => {
  const { firstName, middleName, lastName, DOB, email, password } = req.body;

  if (!firstName || !lastName || !DOB || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const userName = `${firstName} ${middleName} ${lastName}`;

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar photo is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Failed to upload avatar to Cloudinary");
  }

  // Extra Photo
  let extraPhotoUrl = null;
  const extraPhotoPath = await req.files?.extraPhoto?.[0]?.path;
  if (extraPhotoPath) {
    const extraUpload = await uploadOnCloudinary(extraPhotoPath);
    if (extraUpload) {
      extraPhotoUrl = extraUpload.url;
    }
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "This email is already registered");
  }

  const dob = new Date(DOB);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of birth provided");
  }

  const user = await User.create({
    userName,
    DOB: dob,
    email,
    password,
    avatar: avatar.url,
    extraPhoto: extraPhotoUrl,
  });

  const userData = {
    id: user._id,
    userName: user.userName,
    DOB: user.DOB,
    email: user.email,
    avatar: user.avatar,
    extraPhoto: user.extraPhoto,
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
    avatar: user.avatar,
    extraPhoto: user.extraPhoto,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, "User Login successfuly",userData));
});

const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User Logout successfuly"));
});

export { userRegister, userLogin, userLogout };
