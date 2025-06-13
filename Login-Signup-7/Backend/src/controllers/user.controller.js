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

  const name = `${firstName} ${
    middleName ? middleName + "" : ""
  } ${lastName}`;

  // const avatarLocalPath = req.files?.avatar[0]?.path;
  const avatarLocalPath = req.file?.path;

  console.log("Local file path:", avatarLocalPath);

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) {
    console.error("Cloudinary upload failed. Path ", avatarLocalPath);

    throw new ApiError(400, "Failed to upload avatar to Cloudinayry");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(
      400,
      "User with this email is already exist in our system"
    );
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
    fullName: user.fullName,
    DOB: user.DOB,
    email: user.email,
    avatar: user.avatar,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User register successfully"));
});

const userLogin = asyncHandler(async (req, res) => {});

const userLogout = asyncHandler(async (req, res) => {});

export { userRegister, userLogin, userLogout };
