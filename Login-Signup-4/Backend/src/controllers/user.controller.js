import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const userRegister = asyncHandler(async (req, res) => {
  const {
    fullName,
    fatherName,
    motherName,
    phoneNumber,
    villageName,
    email,
    password,
  } = req.body;

  if (
    !fullName ||
    !fatherName ||
    !motherName ||
    !phoneNumber ||
    !villageName ||
    !email ||
    !password
  ) {
    throw new ApiError(
      400,
      "All fields are required to complete the register,please fill all input"
    );
  }

  const exsitedUser = await User.findOne({ email });
  if (exsitedUser) {
    throw new ApiError(400, "This Email is already exists");
  }

  const user = await User.create({
    fullName,
    fatherName,
    motherName,
    phoneNumber,
    villageName,
    email,
    password,
  });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    fatherName: user.fatherName,
    motherName: user.motherName,
    phoneNumber: user.phoneNumber,
    villageName: user.villageName,
    email: user.email,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "You registered successfully"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please enter correct email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "This email is not here");
  }

  const isPasswordisCorrect = user.password === password;

  if (!isPasswordisCorrect) {
    throw new ApiError(400, "Please provide correct password");
  }

  const userData = {
    id: user._id,
    fullName: user.fullName,
    fatherName: user.fatherName,
    motherName: user.motherName,
    phoneNumber: user.phoneNumber,
    email: user.email,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User login successfuly"));
});

const userLogout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User logout Successfuly"));
});

export { userRegister, userLogin, userLogout };
