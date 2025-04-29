class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Duplicate Email Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Invalid Error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid. Please try again.`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expired Error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token has expired. Please login again.`;
    err = new ErrorHandler(message, 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
