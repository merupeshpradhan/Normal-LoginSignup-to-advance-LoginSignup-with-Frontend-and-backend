import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Here write Frontend connection using using under .env code view
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Here import routes and use start
import userRoute from "./routes/user.route.js";

app.use("/api/v1/users", userRoute);

export { app };
