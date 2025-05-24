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

export { userRegister };
