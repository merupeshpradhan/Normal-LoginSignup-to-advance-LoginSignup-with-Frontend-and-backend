import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Frontend Connection here

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route importe here

export { app };
