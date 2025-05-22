import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Heere write for Backend Connection with Frontend

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRoutes);

export { app };
