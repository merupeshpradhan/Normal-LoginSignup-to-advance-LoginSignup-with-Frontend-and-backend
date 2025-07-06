import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Frontend connection write here
app.use(cors({ origin:process.env.CORS_ORIGIN, credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Here import routes and use express thare
import userRoutes from "./routes/user.routes.js";

// Here start website first work
app.use("/api/v1/users", userRoutes);

// Error Handler
import { errorHandler } from "./middlewares/error.middleware.js";
import e from "express";
app.use(errorHandler);

export { app };
