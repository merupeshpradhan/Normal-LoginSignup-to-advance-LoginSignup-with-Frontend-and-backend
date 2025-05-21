import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const userRegister = asyncHandler(async (req, res) => {
  const { fullName, motherName, fathername, DOB, email, password } = req.body;

  if (!fullName || !motherName || !fathername || !DOB || !email || !password) {
    throw new ApiError(
      400,
      "All fileds are required to register, please complete the form"
    );
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(400, "user with this email is already exists");
  }

  const dob = new Date(DOB);
  if (isNaN(dob.getTime())) {
    throw new ApiError(400, "Invalid date of Birth format");
  }

  const user = await User.create({
    fullName,
    motherName,
    fathername,
    DOB: dob,
    email,
    password,
  });

  const userData = {
    id: user._id,
    fullName: user.fullName,
    motherName: user.motherName,
    fathername: user.fathername,
    DOB: user.DOB,
    email: user.email,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, userData, "User register Successfully"));
});

export { userRegister };
