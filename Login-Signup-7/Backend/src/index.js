import connectDB from "./database/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config("./.env");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\n Server as running at PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!!", error);
  });