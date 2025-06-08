import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const userRegister = asyncHandler(async (req, res) => {
  const { name, DOB, email, avatar, password } = req.body;

  if (!name || !DOB || !email || !avatar || !password) {
    throw new ApiError(400, "Here all filed are required");
  }

  const userDetials = await User.findOne({ email });

  if (userDetials) {
    throw new ApiError(400, "This email is already exist in our system");
  }
  
});

const userLogin = asyncHandler(async (req, res) => {});

const userLogout = asyncHandler(async (req, res) => {});

export { userRegister, userLogin, userLogout };
