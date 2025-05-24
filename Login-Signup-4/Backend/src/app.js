import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Here write for connection with Frontend

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes import

// Routes code decalartion

export { app };
