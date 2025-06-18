import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const userRegister = asyncHandler(async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    stateName,
    villageName,
    distName,
    password,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !stateName ||
    !villageName ||
    !distName ||
    !password
  ) {
    throw new ApiError(400, "Please provide your all detials");
  }

  const emailDetails = await User.findOne({ email });
  if (emailDetails) {
    throw new ApiError(400, "This user eamil is already exist in our area");
  }

  const fullName = `${firstName} ${lastName}`;

  const user = await User.create({
    fullName,
    email,
    stateName,
    distName,
    villageName,
    password,
  });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    stateName: user.stateName,
    distName: user.distName,
    villageName: user.villageName,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User register successfuly"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please provide your email and correct password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "This Email is does not exist in our area");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "incorrect password ");
  }

  const userData = {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    stateName: user.stateName,
    distName: user.distName,
    villageName: user.villageName,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User login successfuly"));
});

const userLogout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User logout successfuly"));
});

export { userRegister, userLogin, userLogout };
