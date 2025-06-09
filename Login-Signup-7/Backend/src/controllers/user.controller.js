import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uplodOnCloudinary } from "../utils/cloudinary.js";

const userRegister = asyncHandler(async (req, res) => {
  const { firstName, middleName, lastName, DOB, email, password } = req.body;

  if (
    !firstName ||
    !middleName ||
    !lastName ||
    !DOB ||
    !email ||
    !avatar ||
    !password
  ) {
    throw new ApiError(400, "Here all filed are required");
  }

  const fullName = `${firstName} ${middleName} ${lastName}`;

  const avatarLocalPath = req.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uplodOnCloudinary(avatarLocalPath);

  const findeDetials = await User.findOne({ email });

  if (findeDetials) {
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
    fullName,
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
    .status(200)
    .json(ApiResponse(200, userData, "User register successfully"));
});

const userLogin = asyncHandler(async (req, res) => {});

const userLogout = asyncHandler(async (req, res) => {});

export { userRegister, userLogin, userLogout };
