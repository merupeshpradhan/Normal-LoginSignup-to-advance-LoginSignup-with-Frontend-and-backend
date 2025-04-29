import { catchAsyncError } from "../middlewares/catchAsynchError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return next(new ErrorHandler("Please fill full registration form!"));
  }

  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already exists!"));
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  sendToken(user, 200, res, "User Registered Successfully!");
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and  password.", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password.", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password.", 400));
  }

  sendToken(user, 200, res, "User logged in Successfully!");
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(201)
    // .cookie("token", "", {
    //   httpOnly: true,
    //   expires: new Date(Date.now()),
    // })
    .json({
      success: true,
      message: "User logged out successfully!",
    });
});
