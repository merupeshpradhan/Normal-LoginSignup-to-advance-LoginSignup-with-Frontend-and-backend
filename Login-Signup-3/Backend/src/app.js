import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import cookiParser from "cookie-parser";

const app = express();

app.use(cookiParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRoutes);

export { app };
