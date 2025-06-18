import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Frontend Connection here

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route importe here
import userRoute from "./routes/user.route.js";

// Here Routes start for use
app.use("/api/v1/users", userRoute);

export { app };
