import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const userRegister = asyncHandler(async (req, res) => {
  const { fullName, motherName, fatherName, DOB, email, password } = req.body;

  if (!fullName || !motherName || !fatherName || !DOB || !email || !password) {
    throw new ApiError(
      400,
      "All fileds are required to register, please complete the form"
    );
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "user with this email already exists");
  }

  const dob = new Date(DOB);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of Birth format");
  }

  const user = await User.create({
    fullName,
    motherName,
    fatherName,
    DOB: dob,
    email,
    password,
  });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    motherName: user.motherName,
    fathername: user.fatherName,
    DOB: user.DOB,
    email: user.email,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User registered successfuly"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All Fields Are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "This Email is not Available in this Area");
  }

  const isPasswordCorrect = user.password === password;

  if (!isPasswordCorrect) {
    throw new ApiError(
      401,
      "The Password is Incorrect Please Provide Good Password"
    );
  }

  const userData = {
    id: user._id,
    fullName: user.fullName,
    motherName: user.motherName,
    fatherName: user.fatherName,
    DOB: user.DOB,
    email: user.email,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, userData, "User login successfuly"));
});

const userLogout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User logout successfully"));
});

export { userRegister, userLogin, userLogout };
