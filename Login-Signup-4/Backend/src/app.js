import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Here write for connection with Frontend

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes import
import userRoutes from "./routes/user.routes.js";

// Routes code decalartion
app.use("/api/v1/users", userRoutes);

export { app };
