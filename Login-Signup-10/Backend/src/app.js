import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Frontend connection write here

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Here import routes and use express thare
import userRoutes from "./routes/user.routes.js";

// Here start website first work
app.use("/api/v1/users", userRoutes);

export { app };
