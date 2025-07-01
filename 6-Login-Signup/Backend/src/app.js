import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express, { response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Frontend Connection here
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route importe here
import userRoute from "./routes/user.route.js";

// Here Routes start for use
app.use("/api/v1/users", userRoute);

export { app };
