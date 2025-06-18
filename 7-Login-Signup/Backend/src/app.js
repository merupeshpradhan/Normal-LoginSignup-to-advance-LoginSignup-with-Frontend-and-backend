import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Here frontend connection

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Here Import routes
import userRouter from "./routes/user.route.js";

// Here Routes start for use
app.use("/api/v1/users", userRouter);

export { app };
