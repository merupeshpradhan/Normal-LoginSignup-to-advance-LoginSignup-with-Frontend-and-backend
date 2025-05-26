import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Here write Frontend connection using using under .env code view

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Here import controolers and use here

export { app };
